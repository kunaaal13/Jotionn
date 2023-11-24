'use client'

import React, { useEffect, useState } from 'react'
import SettingsModal from '../modals/settings-modal'
import CoverImageModal from '../modals/cover-image-modal'

type ModalProviderProps = {}

function ModalProvider({}: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  )
}

export default ModalProvider
