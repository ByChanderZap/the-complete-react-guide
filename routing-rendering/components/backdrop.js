/* eslint-disable react/jsx-handler-names */
'use client'

import { useRouter } from 'next/navigation.js'

export default function ModalBackdrop () {
  const router = useRouter()

  return <div className='modal-backdrop' onClick={router.back} />
}
