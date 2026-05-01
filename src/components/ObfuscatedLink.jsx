import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ObfuscatedLink({
  type,
  children,
  className,
  onClick,
  animate = false,
  whileHover,
  whileTap,
}) {
  const [href, setHref] = useState('#')

  useEffect(() => {
    const whatsapp = import.meta.env.VITE_WHATSAPP
    const email = import.meta.env.VITE_EMAIL

    if (type === 'whatsapp') {
      setHref(`https://wa.me/${whatsapp}`)
    } else if (type === 'email') {
      setHref(`mailto:${email}`)
    }
  }, [type])

  const commonProps = {
    href,
    target: type === 'whatsapp' ? '_blank' : undefined,
    rel: type === 'whatsapp' ? 'noreferrer' : undefined,
    className,
    onClick,
  }

  if (animate) {
    return (
      <motion.a {...commonProps} whileHover={whileHover} whileTap={whileTap}>
        {children}
      </motion.a>
    )
  }

  return <a {...commonProps}>{children}</a>
}