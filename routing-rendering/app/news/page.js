import NewsList from '@/components/news/list.js'
import { DUMMY_NEWS } from '@/dummy-news.js'

export default function NewsPage () {
  return (
    <div>
      <h1>NEWWWWWWWS PAGE</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  )
}
