import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { generateRandomString } from './actions/utils.js'

const db = sql('meals.db')

export async function getMeals () {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal (slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal (meal) {
  const randomSufix = generateRandomString(10)
  const sluggedTitle = slugify(meal.title, { lower: true })
  meal.slug = `${sluggedTitle}-${randomSufix}`
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop().toLowerCase()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(bufferImage), (err) => {
    if (err) {
      throw new Error('Failed saving image')
    }
  })

  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals
    (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email,
      @slug
    )
  `).run(meal)
}
