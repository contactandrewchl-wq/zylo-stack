const decode = (str) => atob(str)

export const CONTACT = {
  whatsapp: import.meta.env.VITE_WHATSAPP,
  whatsappUrl: `https://wa.me/${import.meta.env.VITE_WHATSAPP}`,
  email: import.meta.env.VITE_EMAIL,
  emailUrl: `mailto:${import.meta.env.VITE_EMAIL}`,
  getWhatsappUrl: () => `https://wa.me/${decode(btoa(import.meta.env.VITE_WHATSAPP))}`,
  getEmailUrl: () => `mailto:${decode(btoa(import.meta.env.VITE_EMAIL))}`,
}