import { Outlet } from 'react-router-dom'
import PostsList from '../components/PostsList.jsx'
import { BACKEND_URL } from '../constants.js'

export function Posts () {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  )
}

export async function loader () {
  const response = await fetch(`${BACKEND_URL}/posts`)
  const data = await response.json()
  return data.posts
}
