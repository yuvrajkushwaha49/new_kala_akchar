import HeroProcessDiagram from './HeroProcessDiagram.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-arc" aria-hidden />
      <div className="hero-dome" aria-hidden />

      <div className="shell hero-content">
        <h1 className="hero-headline">Fueling the Next <br /> Generation of Brands</h1>
        <a href="#contact" className="btn-enquire">
          Enquire Now
        </a>
        <HeroProcessDiagram />
      </div>
    </section>
  )
}
