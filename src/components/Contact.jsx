export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

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

          .contact-grid {
            display: grid;
            gap: 2rem;
          }

          @media (min-width: 992px) {
            .contact-grid {
              grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
            }
          }

          .contact-intro-title {
            font-size: clamp(1.75rem, 3vw, 2.25rem);
            font-weight: 700;
            margin: 0;
          }

          .contact-intro-text {
            margin: 1rem 0 0;
            color: #adb5bd;
          }

          .contact-form {
            padding: 1.5rem;
            background: rgba(24, 24, 27, 0.55);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
          }

          .form-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .form-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .form-grid__full {
            grid-column: 1 / -1;
          }

          .form-input-dark {
            width: 100%;
            padding: 0.65rem 1rem;
            font-size: 0.9375rem;
            border-radius: 0.5rem;
            background-color: #09090b;
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #fff;
          }

          .form-input-dark::placeholder {
            color: #71717a;
          }

          .form-input-dark:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.08);
          }

          textarea.form-input-dark {
            resize: vertical;
            min-height: 6rem;
          }

          .btn-submit-quote {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.9375rem;
            font-weight: 600;
            background: #18181b;
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #f4f4f5;
          }

          .btn-submit-quote:hover {
            background: #27272a;
            color: #fff;
          }
        `}
      </style>
      <section id="contact" className="section-dark section-block border-t-subtle">
        <div className="shell">
          <div className="contact-grid">
            <div>
              <h2 className="contact-intro-title">Have A Project Idea In Mind?</h2>
              <p className="contact-intro-text">
                Tell us about your goals, timeline, and audience. We will reply with a concise plan and next steps.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <input className="form-input-dark" name="name" type="text" placeholder="Full Name" />
                  <input className="form-input-dark" name="email" type="email" placeholder="Email Address" />
                  <input className="form-input-dark form-grid__full" name="phone" type="tel" placeholder="Phone" />
                  <textarea className="form-input-dark form-grid__full" name="message" rows={4} placeholder="Message" />
                  <div className="form-grid__full">
                    <button type="submit" className="btn-submit-quote">
                      Get Quotes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
