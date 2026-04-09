import CursorGlow from './components/CursorGlow'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import MobileApps from './components/MobileApps'
import Ceo from './components/Ceo'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <CursorGlow />
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <MobileApps />
      <Ceo />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
