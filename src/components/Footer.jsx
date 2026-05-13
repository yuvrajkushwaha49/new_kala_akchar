import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__title">Let&apos;s make something amazing together.</p>
        <a href="#contact" className="btn-footer-contact">
          Contact Us
          <ArrowRight size={16} className="icon-footer-arrow" aria-hidden />
        </a>
      </div>
    </footer>
  )
}
