import HeroProcessDiagram from './HeroProcessDiagram.jsx'
import halfCircleImg from '../assets/half_circle.png'

export default function Hero() {
  return (
    <>
      <style>
        {`
          .hero-section {
            position: relative;
            overflow: hidden;
            padding-top: clamp(4.5rem, 10vw, 8rem);
            padding-bottom: clamp(1.25rem, 4vw, 2.5rem);
            padding-left: env(safe-area-inset-left, 0);
            padding-right: env(safe-area-inset-right, 0);
            background: #000;
            min-height: 88vh;
            min-height: min(92svh, 56rem);
            height: auto;
          }

          .hero-glow-arc,
          .hero-dome {
            position: absolute;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 100%;
          }

          .hero-headline {
            font-family: Montserrat, Inter, sans-serif;
            font-size: clamp(1.65rem, 5.2vw + 0.5rem, 5rem);
            line-height: 1.08;
            letter-spacing: -0.02em;
            font-weight: 700;
            margin: 0;
            padding: 0 0.25rem;
            background: radial-gradient(50% 50% at 50% 50%, #1D1D1D 0%, #656D7B 60%, #E7E7E7 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .btn-enquire {
            display: inline-block;
            margin-top: clamp(1.75rem, 6vw, 5.5rem);
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            text-decoration: none;
            background: #2a2a2e;
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #f4f4f5;
            font-weight: 600;
            font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
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
            bottom: clamp(-52px, -8vw, -36px);
            left: 50%;
            z-index: 0;
            --dome-w: min(78vw, 1400px);
            width: var(--dome-w);
            height: calc(var(--dome-w) / 2);
            transform: translateX(-50%);
            pointer-events: none;
            border-radius: 0;
            border: none;
            background-color: transparent;
            background-image: url('${halfCircleImg}');
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 100% 100%;
            box-shadow: none;
          }
        @media (max-width: 1599px) and (min-width: 1300px) {
            .hero-dome {
              --dome-w: min(90vw, 1400px);
            }
          }
          @media (max-width: 991px) {
            .hero-section {
              min-height: 84vh;
              min-height: min(88svh, 48rem);
            }
            .hero-glow-arc {
              height: min(100vw, 420px);
              transform: translate(-50%, 22%);
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              min-height: auto;
              padding-top: clamp(4rem, 14vw, 6.5rem);
              padding-bottom: 1.5rem;
            }
            .hero-glow-arc {
              opacity: 0.85;
              height: min(110vw, 380px);
            }
            .hero-dome {
              --dome-w: min(100vw, 640px);
            }
          }

          @media (max-width: 380px) {
            .hero-headline {
              font-size: clamp(1.4rem, 8.5vw, 1.85rem);
            }
          }

          @media (min-width: 1400px) {
            .hero-section {
              min-height: 86vh;
              min-height: min(90svh, 58rem);
            }
          }

          @media (max-height: 700px) {
            .hero-section {
              min-height: auto;
              padding-top: 3.5rem;
              padding-bottom: 1rem;
            }
            .btn-enquire {
              margin-top: 1.25rem;
            }
          }

          @media (min-width: 768px) and (max-height: 600px) {
            .hero-section {
              padding-top: 3rem;
            }
            .btn-enquire {
              margin-top: 1rem;
            }
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
