'use client'
export default function Error ({ error }) {
  return (
    <main className='error'>
      <h1>An error accurred</h1>
      <p>Failed to fetch</p>
      <p>Error Message: {error.message}</p>
    </main>
  )
}
