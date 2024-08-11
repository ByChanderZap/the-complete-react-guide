'use server'

import { createAuthSession, destroySession } from '@/lib/auth.js'
import { hashUserPassword, verifyPassword } from '@/lib/hash.js'
import { createUser, getUserByEmail } from '@/lib/user.js'
import { redirect } from 'next/navigation.js'

// server actions are async functions
export async function signup (prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const errors = {}

  if (!email.includes('@')) {
    errors.email = 'Please enter a valid email adress'
  }

  if (password.trim().length < 8) {
    errors.password = 'password must be at least 8 characters long'
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors
    }
  }

  // store it on db (create a new user) after validation
  const hashedPassword = hashUserPassword(password)
  try {
    const id = createUser(email, hashedPassword)
    await createAuthSession(id)
    redirect('/training')
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'Email duplicated'
        }
      }
    }
    throw error
  }
}

export async function signIn (prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  // should validate first email an password to not make a db call if any of them are wrong, but who cares im just learning.
  const user = getUserByEmail(email)

  if (!user) {
    return {
      errors: {
        email: 'Cannot autheticate user, please check your credentials.'
      }
    }
  }

  if (!verifyPassword(user.password, password)) {
    return {
      errors: {
        email: 'Cannot autheticate user, please check your credentials.'
      }
    }
  }

  await createAuthSession(user.id)
  redirect('/training')
}

export async function auth ([mode], prevState, formData) {
  if (mode === 'login') {
    return signIn(prevState, formData)
  } else {
    return signup(prevState, formData)
  }
}

export async function logout () {
  await destroySession()
  redirect('/')
}
