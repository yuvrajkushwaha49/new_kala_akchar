import { services } from '../data/services.js'
import { ArrowRight } from 'lucide-react';

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
.custom-dotted {
  border: none;
  height: 2px;
  background-image: radial-gradient(circle, #666 1.5px, transparent 1.5px);
  background-size: 7px 1px; /* increase 14px for more gap */
  background-repeat: repeat-x;
}
  .service-card-link-learn-more {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    display: inline-block;
  }
    .service-card-link-learn-more{
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
        `}
      </style>
      <section id="services" className="section-dark section-block border-t-subtle">
        <div className="shell">
          <div className="services-layout">
            <div className="services-intro">
              <h2 className="title-section-lg">Brand Growth</h2>
              <p className="services-intro__lead">
                Creating strong, consistent brand experiences across digital and physical touchpoints.
              </p>
            </div>
            <div
              className="services-scroll"
              tabIndex={0}
              aria-label="Service offerings"
            >
              <div className="services-grid">
                {services.map((s) => (
                  <article key={s.title} className="glass-card glass-card--pad">
                    <h3 className="service-card-title">{s.title}</h3>
                    <ul className="service-list">
                      {s.items.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <hr className="border-subtle custom-dotted" />
                    <a href="#contact" className="service-card-link-learn-more">
                      Learn more <ArrowRight size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
