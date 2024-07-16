import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getNewsItem } from '@/lib/news.js'

export default async function NewsDetailPage ({ params }) {
  const newsSlug = params.slug
  const newsData = await getNewsItem(newsSlug)

  if (!newsData) {
    notFound()
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsData.slug}/image`}>
          <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
        </Link>
        <h1>{newsData.title}</h1>
        <time dateTime={newsData.date}>{newsData.date}</time>
      </header>
      <p>{newsData.content}</p>
    </article>
  )
}
