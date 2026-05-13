import { Sparkles } from 'lucide-react'

const stats = [
  { value: '12K+', label: 'Happy Customers' },
  { value: '15+', label: 'Years Experience' },
  { value: '100+', label: 'Global Partners' },
]

export default function Numbers() {
  return (
    <section className="section-dark section-block border-t-subtle">
      <div className="shell">
        <div className="grid-numbers">
          {stats.map((s) => (
            <article key={s.label} className="number-row">
              <span className="icon-pill icon-pill--circle">
                <Sparkles size={18} aria-hidden />
              </span>
              <div>
                <p className="number-value">{s.value}</p>
                <p className="number-label">{s.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
