import HeroProcessDiagram from './HeroProcessDiagram.jsx'

export default function Hero() {
  return (
    <>
      <style>
        {`
          .hero-section {
            position: relative;
            overflow: hidden;
            padding-top: 7rem;
            background: #000;
            height: 93vh;
          }

          .hero-glow-arc,
          .hero-dome {
            position: absolute;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
          }

          .hero-headline {
            font-family: Montserrat, Inter, sans-serif;
            font-size: clamp(2rem, 6vw, 5rem);
            line-height: 1.08;
            letter-spacing: -0.02em;
            font-weight: 700;
            margin: 0;
            background: radial-gradient(50% 50% at 50% 50%, #1D1D1D 0%, #656D7B 60%, #E7E7E7 146%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .btn-enquire {
            display: inline-block;
            margin-top: 5.5rem;
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            text-decoration: none;
            background: #2a2a2e;
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #f4f4f5;
            font-weight: 600;
            font-size: 0.875rem;
          }

          .btn-enquire:hover {
            background: #34343a;
            color: #fff;
          }

          .hero-glow-arc {
            left: 50%;
            bottom: 0;
            z-index: 0;
            width: min(200vw, 1600px);
            height: min(90vw, 520px);
            transform: translate(-50%, 18%);
            background: radial-gradient(
              ellipse 95% 72% at 50% 100%,
              rgba(255, 255, 255, 0.06) 0%,
              rgba(90, 90, 100, 0.05) 38%,
              transparent 68%
            );
            filter: blur(2px);
          }

          .hero-dome {
            bottom: -47px;
            left: 50%;
            z-index: 0;
            --dome-w: min(96vw, 1400px);
            width: var(--dome-w);
            height: calc(var(--dome-w) / 2);
            transform: translateX(-50%);
            pointer-events: none;
            border-radius: 0;
            border: none;
            background-color: transparent;
            background-image: url('./assets/half_circle.png');
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 100% 100%;
            box-shadow: none;
          }
        `}
      </style>
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
    </>
  )
}
