import { BarChart3, Palette, PenLine, Search } from 'lucide-react'

const partnershipFeatures = [
  { icon: Palette, title: 'Creative Design', text: 'Campaign-ready assets that stay on-brand.' },
  { icon: BarChart3, title: 'Data Analysis', text: 'Clear reporting tied to revenue outcomes.' },
  { icon: PenLine, title: 'Copy & Story', text: 'Narratives that resonate across channels.' },
  { icon: Search, title: 'Market Research', text: 'Audience signals that guide every launch.' },
]

export default function Partnership() {
  return (
    <section id="about" className="section-dark section-block border-t-subtle">
      <div className="shell">
        <h2 className="partnership-title">One Partner For Brand Execution</h2>
        <div className="partnership-grid">
          {partnershipFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className="partner-card">
              <span className="icon-pill icon-pill--square">
                <Icon size={20} aria-hidden />
              </span>
              <div>
                <h3 className="partner-card-title">{title}</h3>
                <p className="partner-card-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
