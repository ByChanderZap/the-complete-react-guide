'use client'
import styles from './nav-link.module.css'

import Link from 'next/link.js'
import { usePathname } from 'next/navigation.js'

export default function NavLink ({ children, href }) {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
    >
      {children}
    </Link>
  )
}
