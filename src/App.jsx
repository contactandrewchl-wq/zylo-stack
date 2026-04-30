import { Routes, Route } from 'react-router-dom'
import useScrollToHash from './hooks/useScrollToHash'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowWorks from './components/HowWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'
import Nosotros from './pages/Nosotros'

function Home() {
  useScrollToHash()
  return (
    <>
      <Hero />
      <Services />
      <HowWorks />
      <FinalCTA />
    </>
  )
}

function App() {
  return (
    <main className="bg-zylo-bg min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Pricing />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App