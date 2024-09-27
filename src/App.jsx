import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Insights from './components/Insights'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="bg-yellow-100">
      <div className="bg-gray-100"><Navbar/></div>
      
      <Hero/>
      <Insights/>
      <Stats/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
