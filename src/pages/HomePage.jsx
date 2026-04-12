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
          <h1>Constructing value through experience and expertise.</h1>
          {/* <p className="home-hero-text">
            Building a world where businesses and communities thrive in
            sustainable and safe construction.
          </p> */}
          <div className="hero-actions">
            <Link className="button button-primary" to="/services">
              Explore Our Services
            </Link>
            <Link className="button button-secondary button-secondary-light" to="/projects">
              View Project Highlights
            </Link>
          </div>
        </div>
      </section>

      <div className="page-content-shell">
        <SectionBlock
          eyebrow="Industry Needs"
          title="A premier team focused on on-time, on-budget delivery."
          description="In any project, Scope and Time are slave drivers who demand adherence, sometimes at the expense of other factors like Quality, Budget, Resources, and Perfection. Sometimes project risks bring up threats and opportunities that need to be managed. The solution lies in maintaining a fine balance between all. This is where we come in with our Experience and Expertise in project management."
        />

        <SectionBlock
          eyebrow="Who We Are"
          title="An innovative and constantly evolving team of experts."
          description="We are Cubic Turnkey Pvt Ltd. - a team of engineers, architects, valuers, and trainers. The secret of our success lies in our team of highly motivated staff, skilled and trained in their domain of project delivery, catalyzed by an environment of sharing ideas and innovation. Our well-equipped office with continuous technology upgradation supports both remote and on-site engineers with the resources they require to succeed. With market resources getting scarce, our emphasis is on automation and mechanization for efficiency and effectiveness."
        />

        <SectionBlock
          eyebrow="Environmental Impact"
          title="Environmental emphasis now for a better future."
          description="We support the adoption of sustainability in our projects to meet present needs without compromising future generations. We aspire to meet clients' needs by addressing economic, environmental, and social life."
        />

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
