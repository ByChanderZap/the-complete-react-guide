'use server'

import { redirect } from 'next/navigation.js'
import { saveMeal } from '../meals.js'

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('summary'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }

  await saveMeal(meal)
  redirect('/meals')
}
