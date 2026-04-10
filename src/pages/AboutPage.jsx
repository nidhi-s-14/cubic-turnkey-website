import { FaLinkedinIn } from "react-icons/fa6";
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

const founders = [
  {
    name: "Mr. Tejas Sura",
    role: "Director",
    image: "about/tejassura.jpeg",
    linkedin: "https://www.linkedin.com/in/tejassura/",
    description:
      "Mr Tejas Sura has over 20 years experience in areas of Project Management, Structural Engineering, Procurement and Construction. He is an accepted corporate trainer, in Project Management and Civil Engineering. The proof of his ability is visible through his globally recognised education and certifications from The University of Texas at Austin, Project Management Institute, Welingkars and VJTI. He holds Licenses granted by The Municipal Corporation of Greater Mumbai to practice Structural Engineering and Plumbing Consulting. He has contributed in committees that define international and national standards in Project Management and Civil Engineering, and has addressed various global technical forums. Cubic Turnkey Pvt. Ltd. is a brainchild of Mr. Tejas Sura; it was created to service the requirements of the present construction, real estate and infrastructure industry. The current challenges in this industry can be met by the company, which is architectured around his vast experience and expertise.",
  },
  {
    name: "Mrs. Keyuri Sura",
    role: "Co-founder",
    image: "about/keyurisura.jpeg",
    linkedin: "https://www.linkedin.com/in/keyuri-sura-3536052a6/",
    description:
      "Mrs Keyuri Sura, co-founder of Cubic Turnkey Pvt. Ltd., is an accomplished Architect and has designed many residential, industrial and commercial projects of repute during her over 20 years of experience. In addition, she also has a flair for Interior Design and Architecture.",
  },
];

const team = [
  {
    name: "Dr. Richard E. Klingner",
    role: "Advisory Team",
    image: "about/richard.png",
    linkedin: "",
    description:
      "Dr. Richard E. Klingner is the L.P. Gilvin Professor Emeritus of Civil Engineering at the University of Texas at Austin. He received his academic degrees from the University of California in Berkeley. He specialises in structural engineering, with emphasis on the analytical and experimental investigation of the dynamic response of structures, earthquake-resistant design of masonry and concrete structures, and anchorage to concrete. He has authored or co-authored more than 90 refereed journal articles, 40 books or book chapters, and 500 other technical publications. He has served as Chair of the Masonry Standards Joint Committee.",
  },
  {
    name: "Mr. Phil Bristol",
    role: "Advisory Team",
    image: "about/phil.jpeg",
    linkedin: "",
    description:
      "Mr. Phil Bristol is the Founder, President and CEO of Family Drama Vortex® and Projectivity Solutions- which integrates both business and people skills into each engagement. He works with boards of directors, executives, leaders, high-potentials and teams to increase their effectiveness, influence and profitability. He helps facilitate personal and organizational change, serves as a sounding board on complex people issues and works with top performers so they advance to the next level of contribution and effectiveness.",
  },
  {
    name: "Mr. Chandrabhan Agarwal",
    role: "Advisory Team",
    image: "about/chandrabhan.png",
    linkedin: "",
    description:
      "Mr. Chandrabhan Agarwal is a civil engineers who has worked for over 25 years with The Municipal Corporation of Greater Mumbai in 5 different departments. His expertise lies in liaison with MCGM, MMRDA and other authorities.",
  },
  {
    name: "Mrs. Ratna Bavadekar",
    role: "Advisory Team",
    image: "about/ratna.png",
    linkedin: "",
    description:
      "Mrs. Ratna Bavadekar is an international architect of repute, registered with the Council of Architecture. She is credited with completing several architectural assignments, and has won awards for them. Her expertise covers, but is not limited, by commercial, residential, landscaping and interior design. ",
  },
  {
    name: "Mr. Manish Patel",
    role: "Advisory Team",
    image: "about/manish.png",
    linkedin: "",
    description:
      "Mr. Manish Patel is a graduate from Jamnalal Bajaj Institute of Management Studies. He has chosen Construction Management as his area of expertise. He has vast experience in interiors of retail chains and gymnasia, repair of heritage structures, mass housing projects and residential building.",
  },
  {
    name: "Mr. Dattatraya Pathak",
    role: "Advisory Team",
    image: "about/dattatraya.png",
    linkedin: "",
    description:
      "Mr. Dattatraya Pathak has over thirty years of professional experience in delivery of Information Technology (IT) projects and programs using various project execution methodologies. Imparted Project/Program/Portfolio training to practitioners and has set up Project Management Office for large organisations.",
  },
  {
    name: "Mr. Raju Rao",
    role: "Advisory Team",
    image: "about/raju.png",
    linkedin: "",
    description:
      "Mr. Raju Rao is a veteran practitioner and trainer of project management principles. He has several qualifications conferred upon him by universities in India and overseas. A venerated member of many professional associations working in the areas of Project Management and Cost. He is an author of several publications in Project Management. And a globally certified assessor for an organisation's project management maturity.",
  },
  {
    name: "Mr. Vishvanath Rangan",
    role: "Advisory Team",
    image: "about/vishvanath.png",
    linkedin: "",
    description:
      "Mr. Vishvanath Rangan has been in the IT field for the past 35 years and has overseen the implementation of large IT mega projects. His expertise is in the areas of Business Process and administration. All these are aimed at bringing efficiency to the work done by Cubic Turnkey India Pvt. Ltd.",
  },
  {
    name: "Mr. Ranganath Satam",
    role: "Advisory Team",
    image: "about/ranganath.png",
    linkedin: "",
    description:
      "Mr. Ranganath Satam is a qualified Civil Engineer from University of Mumbai, and a member of the Indian Society of Structural Engineers. He has been granted a License by The Municipal Corporation of Greater Mumbai to practice Structural Engineering. Satam has a long history of designing Industrial Structures, Commercial and Recreational buildings, Residential Buildings and Townships.",
  },
  {
    name: "Mr. Deepak Shrivastav",
    role: "Advisory Team",
    image: "about/deepak.png",
    linkedin: "",
    description:
      "Mr. Deepak Shrivastav is a Construction engineer and qualified as a registered valuer of property by the Government of India. He also holds a license and expertise in structural Design. Deepak has executed a number of projects in retail outlets, showrooms, structural repair, civil and interiors and residential bungalows with landscaping.",
  }
];

function getInitials(name) {
  return name
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

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
        title="Founders and advisors that built the company."
      >
        <div className="founder-grid">
          {founders.map((person) => (
            <article className="founder-card" key={person.name}>
              <div className="profile-card-media">
                {person.image ? (
                  <img className="profile-card-image" src={person.image} alt={person.name} />
                ) : (
                  <div className="profile-card-placeholder" aria-hidden="true">
                    {getInitials(person.name)}
                  </div>
                )}
              </div>
              <div className="profile-card-body">
                <div className="profile-card-header">
                  <p className="founder-role">{person.role}</p>
                  <div className="profile-card-name-row">
                    <h3>{person.name}</h3>
                    {person.linkedin ? (
                      <a
                        className="profile-linkedin"
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} LinkedIn`}
                      >
                        <FaLinkedinIn aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p>{person.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <div className="profile-card-media">
                {person.image ? (
                  <img className="profile-card-image" src={person.image} alt={person.name} />
                ) : (
                  <div className="profile-card-placeholder" aria-hidden="true">
                    {getInitials(person.name)}
                  </div>
                )}
              </div>
              <div className="profile-card-body">
                <div className="profile-card-header">
                  <p className="team-role">{person.role}</p>
                  <div className="profile-card-name-row">
                    <h3>{person.name}</h3>
                    {person.linkedin ? (
                      <a
                        className="profile-linkedin"
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} LinkedIn`}
                      >
                        <FaLinkedinIn aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p>{person.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
    </>
  );
}

export default AboutPage;
