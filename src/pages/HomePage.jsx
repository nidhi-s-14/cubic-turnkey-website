import { Link } from "react-router-dom";
import SectionBlock from "../components/SectionBlock";

const services = [
  "Project Management & Redevelopment",
  "Turnkey Construction",
  "Structural Audits & Repairs",
  "Architecture & Valuation",
];

const valueAdds = [
  "Ethical practices and transparent bill scrutiny",
  "Strict quality and scope control",
  "Budget and schedule mastery",
];

const clients = [
  "Talwalkar Fitness Solutions Ltd.",
  "L & T Finance Ltd.",
  "Patel Engineering Ltd.",
  "S. D. Fine-Chem Ltd.",
];

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="home-hero-kicker">Sustainability through experience and expertise</p>
          <h1>Constructing value through experience and expertise.</h1>
          <p className="home-hero-text">
            Building a world where businesses and communities thrive in
            sustainable and safe construction.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/services">
              Explore Our Services
            </Link>
            <Link className="button button-secondary button-secondary-light" to="/gallery">
              View Client Portfolio
            </Link>
          </div>
        </div>
      </section>

      <div className="page-content-shell">
        <SectionBlock
          eyebrow="Who We Are"
          title="A premier team focused on on-time, on-budget delivery."
          description="This section is ready for the company overview from the sitemap, including Mumbai roots, multi-disciplinary expertise, and the tailored project approach."
        />

        <SectionBlock
          eyebrow="Core Services"
          title="A homepage summary of the company’s primary offerings."
        >
          <div className="card-grid">
            {services.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
                <p>Placeholder summary block ready for the homepage service snapshot.</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          eyebrow="Value Addition"
          title="Why clients choose Cubic Turnkey."
        >
          <div className="highlight-bar">
            {valueAdds.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          eyebrow="Projects & Clients"
          title="Trusted by industry leaders and residential societies."
          description="This area is reserved for project highlights, client logos, and a future portfolio download CTA."
        >
          <div className="tag-list">
            {clients.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </SectionBlock>
      </div>
    </>
  );
}

export default HomePage;
