'use client'

import { useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from 'next/image.js'

export default function ImagePicker ({ label, name }) {
  const imageInput = useRef()
  const [pickedImage, setPickedImage] = useState()

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  const handlePickClick = () => {
    imageInput.current.click()
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {
            !pickedImage && <p>Not image picked yet</p>
          }
          {
            pickedImage && <Image src={pickedImage} alt='Uploaded image from user' fill />
          }
        </div>
        <input
          className={styles.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type='button' onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}
