import logoImg from '../assets/logo.png'
import { headerNav } from '../data/nav.js'

export default function Header() {
  return (
    <>
      <style>
        {`
          .site-header {
            position: sticky;
            top: 0;
            z-index: 1020;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .site-header__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
            padding-top: 0.85rem;
            padding-bottom: 0.85rem;
          }

          @media (min-width: 992px) {
            .site-header__inner {
              flex-wrap: nowrap;
            }

            .header-pill-nav {
              order: 0;
              width: auto;
              margin-top: 0;
            }
          }

          .site-header__logo-link {
            text-decoration: none;
          }

          .brand-logo {
            width: 160px;
            height: 40px;
            object-fit: contain;
            display: block;
          }

          .header-pill-nav {
            display: flex;
            align-items: center;
            gap: 2.15rem;
            overflow-x: auto;
            padding: 0.35rem 5.25rem;
            border-radius: 17px;
            background: rgba(28, 28, 32, 0.92);
            max-width: min(100%, calc(100vw - 11rem));
          }

          .nav-pill-link {
            color: #a3a3a3;
            font-size: 0.8125rem;
            font-weight: 500;
            white-space: nowrap;
            border-radius: 999px;
            text-decoration: none;
            padding: 0.5rem 1rem;
          }

          .nav-pill-link:hover {
            color: #fafafa;
            background: rgba(255, 255, 255, 0.06);
          }

          .btn-contact-header {
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            text-decoration: none;
            text-align: center;
            background: #2a2a2e;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #f4f4f5;
            font-weight: 600;
            font-size: 0.8125rem;
          }

          .btn-contact-header:hover {
            background: #34343a;
            color: #fff;
          }
        `}
      </style>
      <header className="site-header">
        <div className="shell site-header__inner">
          <a href="#top" className="site-header__logo-link">
            <img src={logoImg} alt="Kala Akchar" className="brand-logo" />
          </a>

          <nav className="header-pill-nav" aria-label="Primary">
            {headerNav.map(({ label, href }) => (
              <a key={label} href={href} className="nav-pill-link">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-contact-header">
            Contact Us
          </a>
        </div>
      </header>
    </>
  )
}
