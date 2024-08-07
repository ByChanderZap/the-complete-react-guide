import Posts from '@/components/posts'
import { getPosts } from '@/lib/posts'

// This is to have dynamic metadata
export async function generateMetadata () {
  const posts = await getPosts()
  const postsLenght = posts.length

  return {
    title: `Browse all our ${postsLenght} posts`,
    description: 'Browse all our posts'
  }
}

export default async function FeedPage () {
  const posts = await getPosts()
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  )
}
