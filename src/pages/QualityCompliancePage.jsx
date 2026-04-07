import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const policies = [
  "ISO Quality Policy",
  "Health & Safety Policy",
  "Compliance obligations",
  "Ethical budgeting and contractor management",
];

function QualityCompliancePage() {
  return (
    <>
      <PageHero
        title="A dedicated framework for policy, safety, and standards."
        description="This page skeleton is positioned for the formal ISO, health and safety, and ethics language from the sitemap."
        aside={
          <>
            <p className="panel-title">Planned content</p>
            <ul>
              <li>Quality commitments</li>
              <li>Safety and prevention culture</li>
              <li>Regulatory and ethical standards</li>
            </ul>
          </>
        }
      />

      <SectionBlock
        eyebrow="Policies"
        title="A clean layout for trust-building compliance content."
      >
        <div className="card-grid">
          {policies.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Placeholder for policy excerpts, commitments, and compliance details.</p>
            </article>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default QualityCompliancePage;
