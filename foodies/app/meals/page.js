import Link from 'next/link.js'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid.js'
import { getMeals } from '@/lib/meals.js'
import { Suspense } from 'react'
import LoadingOut from './loading-out.js'

const LoadMeals = async () => {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

export default async function Meals () {
  return (
    <>
      <header className={styles.header}>
        <h1>Delicious meals, created <span className={styles.highlight}>by you</span></h1>
        <p>Chose your favorite recipe and coock it yourself!</p>
        <p className={styles.cta}>
          <Link href='/meals/share'>
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<LoadingOut />}>
          <LoadMeals />
        </Suspense>
      </main>
    </>
  )
}
