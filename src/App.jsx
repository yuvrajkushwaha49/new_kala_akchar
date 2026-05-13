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
    <>
      <style>
        {`
          .app-root {
            min-height: 100vh;
            background: #000;
            color: #f8f9fa;
          }

          .shell {
            width: 100%;
            max-width: 1270px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          @media (min-width: 576px) {
            .shell {
              padding-left: 1.25rem;
              padding-right: 1.25rem;
            }
          }
        `}
      </style>
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
    </>
  )
}
