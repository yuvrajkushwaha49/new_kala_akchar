import logoImg from '../assets/logo.png'
import { headerNav } from '../data/nav.js'

export default function Header() {
  return (
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
  )
}
