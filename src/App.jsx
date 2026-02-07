import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Specs from './components/Specs'
import FAQ from './components/FAQ'
import CTABar from './components/CTABar'
import Footer from './components/Footer'

/**
 * Main App Component
 * Renders the GridGuard landing page with all sections
 */
function App() {
  return (
    <div className="min-h-screen bg-soft">
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Specs />
        <FAQ />
        <CTABar />
      </main> 
      <Footer />
    </div>
  )
}

export default App
