import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="section-dark section-block border-t-subtle">
      <div className="shell">
        <div className="services-layout">
          <div>
            <h2 className="title-section-lg">Brand Growth</h2>
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
  )
}
