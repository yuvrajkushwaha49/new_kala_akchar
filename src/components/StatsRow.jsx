import { Globe2 } from 'lucide-react'

export default function StatsRow() {
  return (
    <section id="projects" className="section-dark section-block ">
      <div className="shell">
        <div className="grid-stats">
          <article className="glass-card glass-card--media">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop"
              alt="Team collaborating over a tablet"
            />
          </article>
          <article className="glass-card glass-card--pad stat-stack">
            <p className="stat-value">100+</p>
            <p className="stat-label">Campaigns Managed</p>
          </article>
          <article className="glass-card glass-card--pad">
            <div className="chart-bars">
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i} className="chart-bar" />
              ))}
            </div>
            <div className="chart-line" />
          </article>
          <article className="glass-card glass-card--pad stat-stack">
            <Globe2 className="icon-stat" size={28} aria-hidden />
            <p className="stat-value">20+</p>
            <p className="stat-label">Countries Reached</p>
          </article>
        </div>
      </div>
    </section>
  )
}
