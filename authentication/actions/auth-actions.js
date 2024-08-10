'use server'

import { hashUserPassword } from '@/lib/hash.js'
import { createUser } from '@/lib/user.js'
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
    createUser(email, hashedPassword)
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

  redirect('/training')
}
