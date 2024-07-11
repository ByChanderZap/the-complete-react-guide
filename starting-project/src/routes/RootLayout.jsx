import MainHeader from '../components/MainHeader.jsx'
import { Outlet } from 'react-router-dom'

export function RootLayout () {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}
