import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Numbers from './components/Numbers.jsx'
import Partnership from './components/Partnership.jsx'
import Services from './components/Services.jsx'
import StatsRow from './components/StatsRow.jsx'

export default function App() {
  return (
    <div id="top" className="app-root">
      <Header />
      <main>
        <Hero />
        <StatsRow />
        <Services />
        <Partnership />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
