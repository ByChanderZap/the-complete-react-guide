import NewsList from '@/components/news/list.js'
import { getLatestNews } from '@/lib/news.js'

export default function LatesNewsPage () {
  const latestNews = getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}
