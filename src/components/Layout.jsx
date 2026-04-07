import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Quality", to: "/quality-compliance" },
  { label: "Careers", to: "/careers" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "site-shell site-shell-home" : "site-shell"}>
      <header className={isHome ? "site-header site-header-home" : "site-header"}>
        <NavLink className="brand" to="/" aria-label="Cubic Turnkey home">
          <img className="brand-lockup" src="/brand/logo-with-text.png" alt="Cubic Turnkey" />
        </NavLink>

        <nav className={isHome ? "site-nav site-nav-home" : "site-nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? `site-nav-link ${isHome ? "site-nav-link-home " : ""}is-active`
                  : isHome
                    ? "site-nav-link site-nav-link-home"
                    : "site-nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className={isHome ? "site-main site-main-home" : "site-main"}>{children}</main>

      <footer className="site-footer">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <img className="footer-logo" src="/brand/logo-only.png" alt="" />
            <div>
              <p className="footer-name">Cubic Turnkey Pvt. Ltd.</p>
              <p className="footer-copy">Sustainability through experience and expertise.</p>
            </div>
          </div>
          <p className="footer-note">Constructing value through experience and expertise.</p>
        </div>

        <nav className="footer-sitemap" aria-label="Footer sitemap">
          <p className="footer-heading">Sitemap</p>
          <div className="footer-links">
            {navItems.map((item) => (
              <NavLink key={item.to} className="footer-link" to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
