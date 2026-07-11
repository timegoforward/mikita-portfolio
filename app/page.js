const resumeUrl = 'https://www.figma.com/design/844mhdmXjhDV9249KpoYqC/Mikita-Yemialyanau_Portfolio-2026?node-id=1475-281&t=Enls0ZCeA8PcyyRj-1';
const linkedInUrl = 'https://www.linkedin.com/in/mikita-yemialyanau-298665105/';
const email = 'timegoforward@gmail.com';
const phone = '+48 737 921 343';

const skills = [
  'End-to-End Design Ownership',
  'Cross-Functional Team Leadership',
  'Brand-to-Product Strategy',
  'AI-Augmented Design Operations',
  'Customer Touchpoint Systems',
  'Business-Driven Design Decisions'
];

function Icon({ type }) {
  const paths = {
    cv: <><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 8h10M7 12h7M7 16h5"/></>,
    phone: <><path d="M8.5 3.5 6 4.6c-.8.4-1.2 1.3-.9 2.2 1.6 5.1 5.6 9.1 10.7 10.7.9.3 1.8-.1 2.2-.9l1.1-2.5-4.1-2-1.2 1.8c-1.8-.8-3.2-2.2-4-4L11.6 8 8.5 3.5Z"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></>,
    mail: <><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></>
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">{paths[type]}</svg>;
}

function ContactLink({ href, type, children, external = false }) {
  return (
    <a className="contact-link" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      <span className="icon-box"><Icon type={type} /></span>
      <span>{children}</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <header className="identity mobile-only">
          <h1>Mikita Yemialyanau</h1>
          <nav className="top-links" aria-label="Primary">
            <ContactLink href={resumeUrl} type="cv" external>Resume</ContactLink>
            <ContactLink href={`mailto:${email}`} type="phone">Contact</ContactLink>
            <ContactLink href={linkedInUrl} type="linkedin" external>LinkedIn</ContactLink>
          </nav>
        </header>

        <div className="left-column">
          <div className="headline" aria-label="Head of Design">
            <span>Head of</span>
            <span>Design</span>
          </div>
          <nav className="portfolio-links" aria-label="Portfolio sections">
            <a href="#brand-marketing">Brand &amp; Marketing</a>
            <a href="#product">Product</a>
          </nav>
        </div>

        <div className="right-column">
          <header className="identity desktop-only">
            <h1>Mikita Yemialyanau</h1>
            <nav className="top-links" aria-label="Primary">
              <ContactLink href={resumeUrl} type="cv" external>Resume</ContactLink>
              <ContactLink href={`mailto:${email}`} type="phone">Contact</ContactLink>
              <ContactLink href={linkedInUrl} type="linkedin" external>LinkedIn</ContactLink>
            </nav>
          </header>

          <p className="intro desktop-only">Brand, marketing, and product design under one strategic direction.</p>
          <p className="description">Turning business goals into recognizable identity, trusted communication, and scalable product experiences across digital, physical, and printed touchpoints — <strong>from first impression to daily use.</strong></p>

          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>

          <img className="portrait" src="https://www.figma.com/api/mcp/asset/34e2e33e-39f3-4ba7-9011-9158d86908c6" alt="Portrait of Mikita Yemialyanau" />

          <footer className="contact-details">
            <ContactLink href={`mailto:${email}`} type="mail">{email}</ContactLink>
            <ContactLink href={`tel:${phone.replace(/\s/g, '')}`} type="phone">{phone}</ContactLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
