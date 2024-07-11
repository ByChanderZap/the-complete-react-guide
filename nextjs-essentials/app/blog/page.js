import Link from 'next/link.js'

export default function Blog () {
  return (
    <main>
      <h1>This is the blog page</h1>
      <p><Link href='/blog/post1'>Post1</Link></p>
      <p><Link href='/blog/post2'>Post2</Link></p>
    </main>
  )
}
