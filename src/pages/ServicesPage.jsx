import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const serviceGroups = [
  "Project Management & Redevelopment",
  "Turnkey Construction & Contracting",
  "Structural Audits & Repairs Consulting",
  "Architecture & Valuation",
  "Corporate Training, Consulting & Software",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        title="A structured home for the company’s full offering."
        description="Each core service area from the sitemap now has its own placeholder block, making it easy to deepen the content page by page."
        aside={
          <>
            <p className="panel-title">Ready to expand</p>
            <ul>
              <li>Service overviews</li>
              <li>Sector-specific examples</li>
              <li>Detailed capabilities and outcomes</li>
            </ul>
          </>
        }
      />

      <SectionBlock
        eyebrow="Offerings"
        title="Five service groups mapped directly from the sitemap."
      >
        <div className="stack-grid">
          {serviceGroups.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Section placeholder ready for service-specific copy, bullet points, and visuals.</p>
            </article>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default ServicesPage;
