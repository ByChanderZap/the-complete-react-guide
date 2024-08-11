'use client'
import Link from 'next/link'
import { useFormState } from 'react-dom'

import { auth } from '@/actions/auth-actions.js'

export default function AuthForm ({ mode }) { // login or signup
  const [formState, formAction] = useFormState(auth.bind(null, [mode]), {})
  return (
    <form id='auth-form' action={formAction}>
      <div>
        <img src='/images/auth-icon.jpg' alt='A lock icon' />
      </div>
      <p>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </p>
      <p>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </p>
      <p>
        <button type='submit'>
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>
      </p>
      {formState.errors &&
        (
          <ul id='form-errors'>
            {
              Object.keys(formState.errors).map((err) => {
                return <li key={err}>{formState.errors[err]}</li>
              })
            }
          </ul>
        )}
      <p>
        {mode === 'login' && (
          <Link href='/?mode=signup'>Create an account.</Link>
        )}
        {mode === 'signup' && (
          <Link href='/?mode=login'>Login with existing account.</Link>
        )}
      </p>
    </form>
  )
}
