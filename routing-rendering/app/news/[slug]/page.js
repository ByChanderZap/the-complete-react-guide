import { DUMMY_NEWS } from '@/dummy-news.js'
import Link from 'next/link.js'
import { notFound } from 'next/navigation.js'

export default function CompleteNew ({ params }) {
  const { slug } = params
  const n = DUMMY_NEWS.find(newItem => newItem.slug === slug)
  if (!n) {
    notFound()
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${n.slug}/image`}>
          <img src={`/images/news/${n.image}`} alt={n.title} />
        </Link>
        <h1>{n.title}</h1>
        <time dateTime={n.date}>{n.date}</time>
      </header>
      <p>{n.content}</p>
    </article>
  )
}
