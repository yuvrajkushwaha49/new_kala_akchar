import { services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <style>
        {`
          .section-dark {
            background: #000;
          }

          .section-block {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .border-t-subtle {
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .glass-card {
            background: rgba(24, 24, 27, 0.55);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
          }

          .glass-card--pad {
            padding: 1.5rem;
            height: 100%;
          }

          .services-layout {
            display: grid;
            gap: 2rem;
            align-items: start;
          }

          @media (min-width: 992px) {
            .services-layout {
              grid-template-columns: 1fr 2fr;
            }
          }

          .title-section-lg {
            font-size: clamp(3rem, 7vw, 6rem);
            font-weight: 700;
            margin: 0;
                text-align: center;
    line-height: 6rem;
          }

          .services-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .service-card-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
          }

          .service-list {
            margin: 1rem 0 0;
            padding-left: 1.25rem;
            color: #adb5bd;
            font-size: 0.9375rem;
          }
            .paragraph-creating-strong{
              margin-top:1rem;
              color:#adb5bd;
              font-size:1rem;
              text-align:center;
            }
        `}
      </style>
      <section id="services" className="section-dark section-block border-t-subtle">
        <div className="shell">
          <div className="services-layout">
            <div>
              <h2 className="title-section-lg">Brand Growth</h2>
              <p className='paragraph-creating-strong'>Creating strong, consistent brand experiences across digital and physical touchpoints.</p>
            </div>
            <div className="services-grid">
              {services.map((s) => (
                <article key={s.title} className="glass-card glass-card--pad">
                  <h3 className="service-card-title">{s.title}</h3>
                  <ul className="service-list">
                    {s.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
