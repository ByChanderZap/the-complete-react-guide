import styles from './main-header.module.css'

import Link from 'next/link.js'
import Image from 'next/image.js'

import logoImage from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background.js'
import NavLink from './nav-link.js'

export default function MainHeader () {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logoImage} alt='a delicious meal' priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
