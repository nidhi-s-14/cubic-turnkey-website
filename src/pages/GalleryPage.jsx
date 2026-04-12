import { useEffect, useState } from "react";
import SectionBlock from "../components/SectionBlock";

const projectHighlights = [
  {
    image: "projects/residential.jpg",
    title: "Residential Construction",
    description:
      "Includes housing projects such as single-family homes, apartments, townhouses, and subdivided communities.",
  },
  {
    image: "projects/commercial.jpg",
    title: "Commercial Construction",
    description:
      "Involves projects for private businesses, including office buildings, retail spaces, shopping malls, restaurants, and hotels.",
  },
  {
    image: "projects/institutional.jpg",
    title: "Institutional Construction",
    description:
      "Covers public or private facilities like schools, hospitals, universities, government buildings, and worship centres.",
  },
  {
    image: "projects/industrial.jpg",
    title: "Industrial Construction",
    description:
      "Focuses on specialised structures like manufacturing plants, factories, refineries, and warehouses.",
  },
  {
    image: "projects/heavy_civil_infrastructure.jpg",
    title: "Heavy Civil/Infrastructure Construction",
    description:
      "Includes public-sector projects involving infrastructure, such as highways, bridges, tunnels, airports, and water treatment systems.",
  },
];

const projectTiles = [
  "Project 1",
  "Project 2",
  "Project 3",
  "Project 4",
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
        description="Browse our ongoing and completed projects."
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
