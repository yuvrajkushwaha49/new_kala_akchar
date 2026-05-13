import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <style>
        {`
          .site-footer {
            padding: 3rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            background: #000;
          }

          .site-footer__inner {
            text-align: center;
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
          }

          .site-footer__title {
            font-size: clamp(1.75rem, 3vw, 2.25rem);
            font-weight: 700;
            margin: 0 0 1.5rem;
          }

          .btn-footer-contact {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            padding: 0.5rem 1.25rem;
            border-radius: 999px;
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.35);
            color: #f8f9fa;
            font-weight: 600;
            font-size: 0.9375rem;
          }

          .btn-footer-contact:hover {
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
          }
        `}
      </style>
      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <p className="site-footer__title">Let&apos;s make something amazing together.</p>
          <a href="#contact" className="btn-footer-contact">
            Contact Us
            <ArrowRight size={16} className="icon-footer-arrow" aria-hidden />
          </a>
        </div>
      </footer>
    </>
  )
}
