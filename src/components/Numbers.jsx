import { Sparkles } from 'lucide-react'

const stats = [
  { value: '12K+', label: 'Happy Customers' },
  { value: '15+', label: 'Years Experience' },
  { value: '100+', label: 'Global Partners' },
]

export default function Numbers() {
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

          .grid-numbers {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .grid-numbers {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .number-row {
            display: flex;
            align-items: center;
            gap: 1rem;
            height: 100%;
            padding: 1.5rem;
            background: rgba(24, 24, 27, 0.55);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
          }

          .number-value {
            font-size: 1.75rem;
            font-weight: 700;
            margin: 0 0 0.25rem;
          }

          .number-label {
            margin: 0;
            color: #adb5bd;
            font-size: 0.9375rem;
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

          .icon-pill--circle {
            border-radius: 50%;
          }
        `}
      </style>
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
    </>
  )
}
