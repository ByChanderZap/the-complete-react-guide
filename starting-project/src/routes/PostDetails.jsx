import { useLoaderData, Link } from 'react-router-dom'

import Modal from '../components/Modal'
import styles from './PostDetails.module.css'
import { BACKEND_URL } from '../constants.js'

export function PostDetails () {
  const post = useLoaderData()

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to='..' className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    )
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  )
}

export async function postDetailsLoader ({ params }) {
  const res = await fetch(`${BACKEND_URL}/posts/${params.id}`)
  const { post } = await res.json()
  console.log(post)
  return post
}
