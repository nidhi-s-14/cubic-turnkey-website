function PageHero({ title, description, actions, aside, backgroundImage }) {
  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0.62) 100%), url("${backgroundImage}")`,
      }
    : undefined;

  return (
    <section className="page-hero">
      <div
        className={backgroundImage ? "hero-banner hero-banner-image" : "hero-banner"}
        style={heroStyle}
      >
        <h1>{title}</h1>
        <p className="hero-text">{description}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
        {aside ? <div className="hero-support">{aside}</div> : null}
      </div>
    </section>
  );
}

export default PageHero;
