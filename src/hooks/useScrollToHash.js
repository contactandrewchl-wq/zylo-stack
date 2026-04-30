import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash, pathname])
}