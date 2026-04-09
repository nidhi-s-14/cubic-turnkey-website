import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const objectives = [
  {
    title: "Service",
    description:
      "To set priorities and decisively act on them with urgency. Demanding clients and compressed project schedules only challenge us to sustain a fast tempo and perform consistently.",
  },
  {
    title: "Communication",
    description:
      "To thoroughly understand what is expected of us, and with a clear sense of direction, move forward to propel a project to successful conclusion.",
  },
  {
    title: "Innovation",
    description:
      "To freely think as engineers and architects, resulting in the combining of existing methods into unique solutions leading to simplification of construction and improvement in quality, speed and economy.",
  },
  {
    title: "Honesty & Integrity",
    description:
      "To build successful relationships on a foundation of trust further strengthened with ethical practices.",
  },
];

const leaders = [
  "Mr. Tejas Sura (Director)",
  "Mrs. Keyuri Sura (Co-founder)",
  "Advisory & Technical Team",
];

function AboutPage() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <>
      <PageHero
        title="An experienced leadership team shaped by quality and customer focus."
        description=""
        backgroundImage={`${assetBase}about/hero.png`}
      />

      <SectionBlock
        eyebrow="Philosophy"
        title="Continuous improvement and technical excellence."
        description="Goal setting, concentration, and determination are the key ingredients needed for the success of any service-oriented business. We have always employed these principles to make our company a winning organisation. While maintaining the utmost in technical expertise, quality becomes the focal point in our endeavour to manage projects. Each and everyone at Cubic Turnkey Pvt. Ltd. is committed to providing a consistently high level of client service."
      />

      <SectionBlock
        eyebrow="Objectives"
        title="Core principles that shape project delivery."
      >
        <div className="card-grid">
          {objectives.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
