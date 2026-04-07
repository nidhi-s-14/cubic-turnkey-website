import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const values = [
  "Customer Centricity",
  "Honesty, Integrity & Trust",
  "Diversity, Equity & Inclusivity",
  "Aim Higher & Innovation",
];

function CareersPage() {
  return (
    <>
      <PageHero
        title="Build your future with Cubic Turnkey."
        description="This page is structured to support employer-brand messaging, values, and a future live list of openings."
        aside={
          <>
            <p className="panel-title">Career page skeleton</p>
            <ul>
              <li>Talent pitch and culture story</li>
              <li>Values and behaviours</li>
              <li>Current openings and apply CTA</li>
            </ul>
          </>
        }
      />

      <SectionBlock
        eyebrow="Values"
        title="A culture framework ready for recruiting content."
      >
        <div className="card-grid">
          {values.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Placeholder for the behavior and culture copy associated with this value.</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Openings"
        title="A placeholder area for future dynamic job listings."
        description="When you are ready, we can connect this block to a CMS, ATS, or a simple manually managed data file."
      />
    </>
  );
}

export default CareersPage;
