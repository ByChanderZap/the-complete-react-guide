import Link from 'next/link.js'

export default function NewsList ({ news }) {
  return (
    <ul className='news-list'>
      {
        news.map((n) => {
          return (
            <li key={n.id}>
              <Link href={`/news/${n.slug}`}>
                <img src={`/images/news/${n.image}`} alt={n.title} />
                <span>{n.title}</span>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
