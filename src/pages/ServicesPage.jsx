import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const serviceGroups = [
  "Structural Audits & Repairs",
  "Strcutural Retrofitting & Strengthening",
  "Structural Design",
  "Project Management",
  "Redevelopment",
  "Turnkey Construction",
  "Architecture",
  "Valuation",
  "Business Growth Consulting",
  "Corporate Training",
  "Software",
];

function ServicesPage() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <>
      <PageHero
        title="High quality services offered by our experts to trusted clients."
        description=""
        backgroundImage={`${assetBase}services/hero.jpg`}
      />

      <SectionBlock
        eyebrow="Offerings"
        title="Services offered by us."
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
