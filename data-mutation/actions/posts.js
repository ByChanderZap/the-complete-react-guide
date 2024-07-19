'use server'

import { uploadImage } from '@/lib/cloudinary.js'
import { storePost } from '@/lib/posts.js'
import { redirect } from 'next/navigation.js'

export async function createPost (prevState, formData) {
  const title = formData.get('title')
  const image = formData.get('image')
  const content = formData.get('content')

  /**
   * This could be a way to validate inputs:
   */

  const errors = []

  if (!title || title.trim().length === 0) {
    errors.push('Title is required')
  }
  if (!content || content.trim().length === 0) {
    errors.push('Content is required')
  }

  if (!image || image.size === 0) { // need to fix this
    errors.push('Image is required')
  }

  if (errors.length > 0) {
    return { errors }
  }

  let imageUrl

  try {
    imageUrl = await uploadImage(image)
  } catch (e) {
    console.log(e)
    throw new Error('Something went wrong uploading image')
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1
  })

  redirect('/feed')
}
