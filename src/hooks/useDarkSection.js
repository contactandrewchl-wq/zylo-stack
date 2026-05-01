import { useState, useEffect } from 'react'

export default function useDarkSection(selectors = []) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const dark = selectors.some((selector) => {
        const el = document.querySelector(selector)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 80 && rect.bottom >= 80
      })
      setIsDark(dark)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return isDark
}