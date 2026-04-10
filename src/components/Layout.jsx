import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
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
  const assetBase = import.meta.env.BASE_URL;
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return undefined;
    }

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [isHome]);

  const headerClassName = isHome
    ? `site-header site-header-home${isScrolled ? " site-header-home-scrolled" : ""}`
    : "site-header";

  const navClassName = isHome
    ? `site-nav site-nav-home${isScrolled ? " site-nav-home-scrolled" : ""}`
    : "site-nav";

  return (
    <div className={isHome ? "site-shell site-shell-home" : "site-shell"}>
      <header className={headerClassName}>
        <div className="site-header-inner">
          <NavLink className="brand" to="/" aria-label="Cubic Turnkey home">
            <img
              className="brand-lockup"
              src={`${assetBase}brand/logo-with-text.png`}
              alt="Cubic Turnkey"
            />
          </NavLink>

          <nav className={navClassName} aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? `site-nav-link ${isHome ? "site-nav-link-home " : ""}${isScrolled ? "site-nav-link-home-scrolled " : ""}is-active`
                    : isHome
                      ? `site-nav-link site-nav-link-home${isScrolled ? " site-nav-link-home-scrolled" : ""}`
                      : "site-nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className={isHome ? "site-main site-main-home" : "site-main"}>{children}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand-block">
            <div className="footer-brand">
              <img
                className="footer-lockup"
                src={`${assetBase}brand/logo-with-text.png`}
                alt="Cubic Turnkey"
              />
            </div>
            <div className="footer-contact">
              <p>
                <strong>Phone:</strong>{" "}
                <a className="footer-contact-link" href="tel:+917400151756">
                  +91 74001 51756
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a className="footer-contact-link" href="mailto:biz@cubicindia.in">
                  biz@cubicindia.in
                </a>
              </p>
              <p>
                <strong>Address:</strong> 36 Manoj Udyog, 40/A G.G. Ambedkar Marg, Wadala,
                Mumbai 400031, India.
              </p>
              <div className="footer-socials" aria-label="Social links">
                <a
                  className="footer-social-link"
                  href="https://www.linkedin.com/company/cubicturnkeyprivatelimited/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Cubic Turnkey on LinkedIn"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a
                  className="footer-social-link"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Cubic Turnkey on Facebook"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
              </div>
            </div>
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
        </div>
      </footer>
    </div>
  );
}

export default Layout;
