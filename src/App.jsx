import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Insights from './components/Insights'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import backgroundImage from './assets/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar/>
      <Hero/>
      <Insights/>
      <Stats/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App
