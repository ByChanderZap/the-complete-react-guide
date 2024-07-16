import { DUMMY_NEWS } from '@/dummy-news.js'
import { notFound } from 'next/navigation.js'

export default function ImagePage ({ params }) {
  const newsItemSlug = params.slug

  const n = DUMMY_NEWS.find(newItem => newItem.slug === newsItemSlug)
  if (!n) {
    notFound()
  }

  return (
    <div className='fullscreen-image'>
      <img src={`/images/news/${n.image}`} alt={n.title} />
    </div>
  )
}
