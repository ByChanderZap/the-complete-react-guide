import NewsList from '@/components/news/list.js'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news.js'
import Link from 'next/link.js'

export default function NewsByYearPage ({ params }) {
  const { filter } = params
  const chosenYear = filter?.[0]
  const chosenMonth = filter?.[1]

  let news
  let links = getAvailableNewsYears()

  if (chosenYear && !chosenMonth) {
    news = getNewsForYear(chosenYear)
    links = getAvailableNewsMonths(chosenYear)
  }

  if (chosenYear && chosenMonth) {
    news = getNewsForYearAndMonth(chosenYear, chosenMonth)
    links = []
  }

  let newsContent = <p>No news found for the chosen period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  if (
    (chosenYear && !getAvailableNewsYears().includes(+chosenYear)) ||
    (chosenMonth && !getAvailableNewsMonths(chosenYear).includes(+chosenMonth))
  ) {
    throw new Error('Invalid filter.')
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {
              links.map((link) => {
                const href = chosenYear
                  ? `/archive/${chosenYear}/${link}`
                  : `/archive/${link}`

                return (
                  <li key={link}>
                    <Link href={href}>{link}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
