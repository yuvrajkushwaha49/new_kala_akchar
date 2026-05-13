export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
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
  )
}
