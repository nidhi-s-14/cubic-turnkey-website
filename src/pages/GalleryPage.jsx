import { useEffect, useState } from "react";
import SectionBlock from "../components/SectionBlock";

const projectHighlights = [
  {
    image: "projects/carousel/residential.jpg",
    title: "Residential Construction",
    description:
      "Includes housing projects such as single-family homes, apartments, townhouses, and subdivided communities.",
  },
  {
    image: "projects/carousel/commercial.jpg",
    title: "Commercial Construction",
    description:
      "Involves projects for private businesses, including office buildings, retail spaces, shopping malls, restaurants, and hotels.",
  },
  {
    image: "projects/carousel/institutional.jpg",
    title: "Institutional Construction",
    description:
      "Covers public or private facilities like schools, hospitals, universities, government buildings, and worship centres.",
  },
  {
    image: "projects/carousel/industrial.jpg",
    title: "Industrial Construction",
    description:
      "Focuses on specialised structures like manufacturing plants, factories, refineries, and warehouses.",
  },
  {
    image: "projects/carousel/heavy_civil_infrastructure.jpg",
    title: "Heavy Civil/Infrastructure Construction",
    description:
      "Includes public-sector projects involving infrastructure, such as highways, bridges, tunnels, airports, and water treatment systems.",
  },
];

const projectTiles = [
  {
    title: "SPPPL Lonavala (Outdoor)",
    image: "projects/tiles/spppl_lonavala_1.png",
  },
  {
    title: "SPPPL Lonavala (Indoor)",
    image: "projects/tiles/spppl_lonavala_2.jpeg",
  },
  {
    title: "SPPPL Lonavala (Commercial Floor)",
    image: "projects/tiles/spppl_lonavala_3.jpeg",
  },
];

function ProjectsPage() {
  const assetBase = import.meta.env.BASE_URL;
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedTile, setExpandedTile] = useState(null);
  const activeProject = projectHighlights[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projectHighlights.length);
    }, 4500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!expandedTile) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpandedTile(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedTile]);

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
          {projectTiles.map((item) => (
            <button
              type="button"
              className="gallery-tile gallery-tile-button"
              key={item.title}
              onClick={() => setExpandedTile(item)}
              aria-label={`Expand ${item.title}`}
            >
              <img
                className="project-tile-image"
                src={`${assetBase}${item.image}`}
                alt={item.title}
              />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </SectionBlock>

      {expandedTile ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={expandedTile.title}
          onClick={() => setExpandedTile(null)}
        >
          <div
            className="project-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-lightbox-close"
              onClick={() => setExpandedTile(null)}
              aria-label="Close expanded project image"
            >
              Close
            </button>
            <img
              className="project-lightbox-image"
              src={`${assetBase}${expandedTile.image}`}
              alt={expandedTile.title}
            />
            <p className="project-lightbox-title">{expandedTile.title}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectsPage;
