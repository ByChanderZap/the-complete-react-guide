import styles from './PostsList.module.css'
import Post from './Post.jsx'
import { useLoaderData } from 'react-router-dom'

function PostsList () {
  const posts = useLoaderData()

  return (
    <>
      {
        posts.length
          ? (
            <ul className={styles.posts}>
              {
                posts.map((post) =>
                  <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                )
              }
            </ul>
            )
          : (
            <div style={{ textAlign: 'center', color: 'white' }}>
              <h2>There are no posts yet.</h2>
              <p>Try to add a new one!</p>
            </div>
            )
      }

    </>
  )
}

export default PostsList
