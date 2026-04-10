import { useEffect, useState } from "react";
import SectionBlock from "../components/SectionBlock";

const projectHighlights = [
  {
    image: "gallery/placeholder_2.png",
    title: "Industrial and Commercial Delivery",
    description:
      "Selected work across industrial, commercial, and institutional environments where planning, execution, and technical clarity matter most.",
  },
  {
    image: "gallery/placeholder_3.png",
    title: "Turnkey Construction Highlights",
    description:
      "A rotating snapshot of projects that reflect the company’s strength in turnkey coordination, quality control, and practical execution.",
  },
  {
    image: "gallery/placeholder_4.png",
    title: "Structural and Architectural Expertise",
    description:
      "Representative visuals that can evolve into full case studies, before-and-after stories, and client-backed project narratives.",
  },
];

const projectTiles = [
  "Redevelopment consulting",
  "Turnkey construction",
  "Structural audits and repairs",
  "Architecture and interiors",
];

function ProjectsPage() {
  const assetBase = import.meta.env.BASE_URL;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectHighlights[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projectHighlights.length);
    }, 4500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section className="page-hero projects-hero">
        <div
          className="projects-carousel"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.7) 100%), url("${assetBase}${activeProject.image}")`,
          }}
        >
          <div className="projects-carousel-copy">
            <p className="eyebrow projects-eyebrow">Projects</p>
            <h1>{activeProject.title}</h1>
            <p className="hero-text">{activeProject.description}</p>
          </div>

          <div className="projects-carousel-controls" aria-label="Project highlights">
            {projectHighlights.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={
                  index === activeIndex
                    ? "projects-carousel-dot is-active"
                    : "projects-carousel-dot"
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionBlock
        eyebrow="Featured Work"
        title="A growing portfolio of construction, audit, and design-led delivery."
        description="This page can expand over time into full project stories, sector filters, downloadable portfolios, and client-specific highlights."
      >
        <div className="gallery-grid">
          {projectTiles.map((item, index) => (
            <article className="gallery-tile" key={item}>
              <img
                className="project-tile-image"
                src={`${assetBase}${projectHighlights[index % projectHighlights.length].image}`}
                alt=""
              />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default ProjectsPage;
