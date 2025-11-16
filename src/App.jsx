import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Infographics from './components/Infographics'
import Timeline from './components/Timeline'
import PassportDemo from './components/PassportDemo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Infographics />
      <Timeline />
      <PassportDemo />
      <Footer />
    </div>
  )
}

export default App
