import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import FeatureSection from './components/FeatureSection'
import DesignerSection from './components/DesignerSection'
import EmailSubscribe from './components/EmailSubscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection />
      <FeatureSection />
      <DesignerSection />
      <EmailSubscribe />
      <Footer />
    </div>
  )
}

export default App
