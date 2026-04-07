import PageHero from "../components/PageHero";
import SectionBlock from "../components/SectionBlock";

const contactFields = [
  "Name",
  "Organization / Society Name",
  "Email Address",
  "Phone Number",
  "Service Required",
  "Project Details / Message",
];

function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s discuss your next project."
        description="This page skeleton includes dedicated areas for office information, contact methods, and a future inquiry form."
        aside={
          <>
            <p className="panel-title">Contact details planned</p>
            <ul>
              <li>Mumbai head office</li>
              <li>Phone and email</li>
              <li>Client and vendor inquiry form</li>
            </ul>
          </>
        }
      />

      <section className="section section-split">
        <div className="card contact-card">
          <p className="eyebrow">Head Office</p>
          <h2>Contact details and location block.</h2>
          <p>
            Cubic Turnkey Pvt. Ltd.
            <br />
            36 Manoj Udyog, 40/A G. D. Ambekar Marg
            <br />
            Wadala, Mumbai 400031, India
          </p>
          <p>
            Telephone: +91 7400151756
            <br />
            Email: biz@cubicindia.in
          </p>
        </div>

        <div className="card contact-card">
          <p className="eyebrow">Inquiry Form</p>
          <h2>Form structure ready for implementation.</h2>
          <div className="tag-list">
            {contactFields.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionBlock
        eyebrow="Next Step"
        title="Ready for a real contact form and map embed later."
      />
    </>
  );
}

export default ContactPage;
