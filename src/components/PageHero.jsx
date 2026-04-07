function PageHero({ title, description, actions, aside }) {
  return (
    <section className="page-hero">
      <div className="hero-banner">
        <h1>{title}</h1>
        <p className="hero-text">{description}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
        {aside ? <div className="hero-support">{aside}</div> : null}
      </div>
    </section>
  );
}

export default PageHero;
