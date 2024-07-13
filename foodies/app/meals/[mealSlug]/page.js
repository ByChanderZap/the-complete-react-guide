import styles from './page.module.css'

import Image from 'next/image.js'
import { getMeal } from '@/lib/meals.js'
import { notFound } from 'next/navigation.js'

export async function generateMetadata ({ params }) {
  const data = getMeal(params.mealSlug)

  if (!data) {
    notFound()
  }

  return {
    title: data.title,
    description: data.summary
  }
}

export default function MealDetails ({ params }) {
  const data = getMeal(params.mealSlug)

  if (!data) {
    notFound()
  }

  data.instructions = data.instructions.replace(/\n/g, '<br>')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={data.image} alt={`Image of ${data.title}`} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{data.title}</h1>
          <p className={styles.creator}>
            By <a href={`mailto:${data.creator_email}`}> {data.creator} </a>
          </p>
          <p className={styles.summary}>
            {data.summary}
          </p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: data.instructions
          }}
        />
      </main>
    </>
  )
}
