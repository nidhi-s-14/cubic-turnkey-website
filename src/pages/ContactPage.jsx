import PageHero from "../components/PageHero";

const serviceOptions = [
  "Project Management & Redevelopment",
  "Turnkey Construction",
  "Structural Audits & Repairs",
  "Architecture & Valuation",
  "Training & Consulting",
  "General Inquiry",
];

function ContactPage() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <>
      <PageHero
        title="Let’s discuss your next project."
        description="Whether you are planning redevelopment, turnkey construction, structural repair, or architectural work, the team is ready to understand your requirements."
        backgroundImage={`${assetBase}contact/hero.png`}
      />

      <section className="section contact-page">
        <div className="contact-page-grid">
          <aside className="card contact-card contact-details-card">
            <p className="eyebrow">Head Office</p>
            <h2>Get in touch with Cubic Turnkey Pvt. Ltd.</h2>
            <p className="contact-summary">
              Reach out for project discussions, redevelopment consulting,
              structural audit requirements, or general business inquiries.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <a className="contact-info-link" href="tel:+917400151756">
                  +91 74001 51756
                </a>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <a className="contact-info-link" href="mailto:biz@cubicindia.in">
                  biz@cubicindia.in
                </a>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">Address</span>
                <p>
                  36 Manoj Udyog, 40/A G.G. Ambedkar Marg,
                  <br />
                  Wadala, Mumbai 400031, India
                </p>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">LinkedIn</span>
                <a
                  className="contact-info-link"
                  href="https://www.linkedin.com/company/cubicturnkeyprivatelimited/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cubic Turnkey Pvt. Ltd.
                </a>
              </div>
            </div>
          </aside>

          <div className="card contact-card contact-form-card">
            <p className="eyebrow">Inquiry Form</p>
            <h2>Share a few details and the team can respond appropriately.</h2>

            <form className="contact-form">
              <div className="contact-form-grid">
                <label className="field">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your full name" required />
                </label>

                <label className="field">
                  <span>Organization / Society Name</span>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Company, society, or project entity"
                  />
                </label>

                <label className="field">
                  <span>Email Address</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>

                <label className="field">
                  <span>Phone Number</span>
                  <input type="tel" name="phone" placeholder="+91" />
                </label>

                <label className="field field-full">
                  <span>Service Required</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field field-full">
                  <span>Project Details / Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project scope, location, timeline, and key requirements."
                    required
                  />
                </label>
              </div>

              <div className="contact-form-actions">
                <button className="button button-primary" type="submit">
                  Submit Inquiry
                </button>
                <p>
                  Prefer email? Write directly to{" "}
                  <a className="contact-info-link" href="mailto:biz@cubicindia.in">
                    biz@cubicindia.in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
