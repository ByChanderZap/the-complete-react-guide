import { NextResponse } from 'next/server.js'

export default function middleware (request) {
  // console.log(request)
  return NextResponse.next()
}

export const config = {
  matcher: '/news'
}
