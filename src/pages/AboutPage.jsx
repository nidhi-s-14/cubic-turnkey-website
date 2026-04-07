import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const objectives = [
  "Service",
  "Communication",
  "Innovation",
  "Honesty & Integrity",
];

const leaders = [
  "Mr. Tejas Sura (Director)",
  "Mrs. Keyuri Sura (Co-founder)",
  "Advisory & Technical Team",
];

function AboutPage() {
  return (
    <>
      <PageHero
        title="An experienced leadership team shaped by quality and customer focus."
        description="This page skeleton is organized around philosophy, objectives, and leadership so we can add the approved company profile in a clean narrative later."
        aside={
          <>
            <p className="panel-title">Planned sections</p>
            <ul>
              <li>Company philosophy</li>
              <li>Operating objectives</li>
              <li>Leadership and advisory team</li>
            </ul>
          </>
        }
      />

      <SectionBlock
        eyebrow="Philosophy"
        title="Continuous improvement and technical excellence."
        description="Reserved for the long-form company philosophy and project-management mindset from the sitemap."
      />

      <SectionBlock
        eyebrow="Objectives"
        title="Core principles that shape project delivery."
      >
        <div className="card-grid">
          {objectives.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Placeholder for the corresponding objective and supporting copy.</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Leadership"
        title="Profiles for the founding and advisory team."
      >
        <div className="tag-list">
          {leaders.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default AboutPage;
