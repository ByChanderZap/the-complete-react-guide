import Messages from '@/components/messages'
import { getMessages } from '@/lib/messages.js'
// import { unstable_noStore } from 'next/cache.js'

// This constant applies the cache revalidate rule for the whole file
// export const revalidate = 5
// const response = await fetch('http://localhost:8080/messages')

// auto | force-dynamic | force-static
// auto is the default value
// force-dynamic will act as non cache
// force-static will always force the use of cache data
// export const dynamic = 'force-dynamic'
// unstable_noStore from 'next/cache.js' is recomended to use over the dynamic thing upside
export default async function MessagesPage () {
  // unstable_noStore()
  // ^^ with that done next will be forced to no cache data fetched from this specific component
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     tags: ['msg']
  //   }
  // })

  // const response = await fetch('http://localhost:8080/messages', {
  //   cache: 'no-store'   // <-- This is one way to re validate cache
  // })

  //    Another way to re validate cache
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     revalidate: 5 This tells next js how many seconds should keep using the same response that already has cached
  //   }
  // })

  // const messages = await response.json()

  const messages = await getMessages()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>
  }

  return <Messages messages={messages} />
}
