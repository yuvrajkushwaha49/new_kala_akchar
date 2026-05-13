import { BarChart3, Palette, PenLine, Search } from 'lucide-react'

const partnershipFeatures = [
  { icon: Palette, title: 'Creative Design', text: 'Campaign-ready assets that stay on-brand.' },
  { icon: BarChart3, title: 'Data Analysis', text: 'Clear reporting tied to revenue outcomes.' },
  { icon: PenLine, title: 'Copy & Story', text: 'Narratives that resonate across channels.' },
  { icon: Search, title: 'Market Research', text: 'Audience signals that guide every launch.' },
]

export default function Partnership() {
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

          .partnership-title {
            text-align: center;
            font-size: clamp(1.75rem, 3vw, 2.25rem);
            font-weight: 700;
            margin: 0 0 3rem;
          }

          .partnership-grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .partnership-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .partner-card {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            height: 100%;
            padding: 1.5rem;
            background: rgba(24, 24, 27, 0.55);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
          }

          .partner-card-title {
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 0.35rem;
          }

          .partner-card-text {
            margin: 0;
            color: #adb5bd;
            font-size: 0.875rem;
          }

          .icon-pill {
            width: 2.75rem;
            height: 2.75rem;
            flex-shrink: 0;
            color: #d4d4d8;
            background: rgba(39, 39, 42, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.12);
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .icon-pill--square {
            border-radius: 0.5rem;
          }

          .icon-pill--circle {
            border-radius: 50%;
          }
        `}
      </style>
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
    </>
  )
}
