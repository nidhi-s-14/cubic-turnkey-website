import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const galleryPlaceholders = [
  "Project highlight images",
  "Client portfolio tiles",
  "Before and after comparisons",
  "Category filters",
];

function GalleryPage() {
  return (
    <>
      <PageHero
        title="A flexible home for project imagery and portfolio proof."
        description="This page is intentionally light for now, with structure in place for future photography, project cards, and downloadable portfolio assets."
        aside={
          <>
            <p className="panel-title">Planned gallery modules</p>
            <ul>
              <li>Image-led project showcase</li>
              <li>Portfolio downloads</li>
              <li>Client and sector filters</li>
            </ul>
          </>
        }
      />

      <SectionBlock
        eyebrow="Portfolio"
        title="Picture highlights and project presentation area."
      >
        <div className="gallery-grid">
          {galleryPlaceholders.map((item) => (
            <article className="gallery-tile" key={item}>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default GalleryPage;
