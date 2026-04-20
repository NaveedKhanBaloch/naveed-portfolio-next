import Image from "next/image";
import Link from "next/link";
import type { PortfolioContent } from "@/lib/types";

type SiteShellProps = {
  content: PortfolioContent;
};

function SocialIcon({ name }: { name: "linkedin" | "github" | "scholar" | "upwork" }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.96 1.96 0 1 0 3.24 4.94a1.96 1.96 0 0 0 3.92 0ZM20.44 13c0-3.42-1.82-5.01-4.25-5.01-1.96 0-2.83 1.08-3.32 1.84V8.5H9.5c.04.88 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.38 1.92-1.38 1.35 0 1.89 1.03 1.89 2.54V20h3.37V13Z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.02-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.86c.85 0 1.71.12 2.51.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (name === "upwork") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" />
        <path
          d="M7.25 8.25v4.55c0 1.77 1.18 2.95 2.95 2.95s2.95-1.18 2.95-2.95V8.25h-1.9v4.46c0 .74-.43 1.18-1.05 1.18s-1.05-.44-1.05-1.18V8.25h-1.9Zm8.3 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-.95 3v4.5h1.9v-4.5h-1.9Z"
          fill="var(--surface)"
        />
      </svg>
    );
  }

  if (name === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 13-7-3.82V17l7 4 7-4v-4.82L12 16Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function SiteShell({ content }: SiteShellProps) {
  const primaryCtaIsExternal = content.hero.primaryCtaHref.startsWith("http");
  const calendarIsExternal = content.contact.calendarHref.startsWith("http");

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true">
        <span className="backdrop-orb orb-one"></span>
        <span className="backdrop-orb orb-two"></span>
        <span className="backdrop-grid"></span>
      </div>

      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-mark">NK</span>
          <span>
            <strong>{content.hero.name}</strong>
            <small>{content.hero.title}</small>
          </span>
        </Link>
        <nav className="main-nav">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <Link href="/academia">Academia</Link>
        </nav>
        <a
          className="button button-primary"
          href={content.hero.primaryCtaHref}
          target={primaryCtaIsExternal ? "_blank" : undefined}
          rel={primaryCtaIsExternal ? "noreferrer" : undefined}
        >
          Book a Call
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI Engineer • Researcher • Builder</p>
              <h1>{content.hero.subtitle}</h1>
              <p className="hero-summary">{content.hero.summary}</p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={content.hero.primaryCtaHref}
                  target={primaryCtaIsExternal ? "_blank" : undefined}
                  rel={primaryCtaIsExternal ? "noreferrer" : undefined}
                >
                  {content.hero.primaryCtaLabel}
                </a>
                <a className="button button-secondary" href={content.hero.secondaryCtaHref}>
                  {content.hero.secondaryCtaLabel}
                </a>
              </div>
              <p className="hero-cta-note">Best for founders and teams evaluating AI strategy, delivery, or product direction.</p>
              <div className="hero-stat-strip">
                {content.metrics.map((metric) => (
                  <article key={metric.label} className="hero-stat-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-image-wrap">
                  <Image src={content.hero.image} alt={content.hero.name} width={720} height={900} priority />
                </div>
                <div className="hero-card-caption">
                  <strong>{content.hero.name}</strong>
                  <span>{content.hero.availability}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="logo-marquee" aria-label="Technology stack">
            <div className="logo-track">
              {[...content.hero.stack, ...content.hero.stack].map((item, index) => (
                <span key={`${item}-${index}`} className="logo-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="metrics-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Proof of work</p>
              <h2>Results</h2>
            </div>
          </div>
          <div className="metrics-grid">
            {content.metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <h2>{metric.label}</h2>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section content-two-col">
          <div>
            <p className="eyebrow">About</p>
            <h2>{content.about.headline}</h2>
          </div>
          <div className="stacked-copy">
            <p>{content.about.summary}</p>
            <div className="badge-row">
              {content.hero.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
            <ul className="feature-list feature-list-strong">
              {content.about.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services</p>
              <h2>What I do</h2>
            </div>
          </div>
          <div className="card-grid">
            {content.services.map((service) => (
              <article key={service.title} className="feature-card">
                <p className="card-index">0{content.services.indexOf(service) + 1}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Featured work</h2>
            </div>
          </div>
          <div className="project-list">
            {content.projects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-image">
                  <Image src={project.image} alt={project.name} width={900} height={640} />
                </div>
                <div className="project-copy">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tag-row">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Experience</h2>
            </div>
          </div>
          <div className="timeline">
            {content.experience.map((item, index) => (
              <article key={`${item.role}-${item.organization}-${item.period}-${index}`} className="timeline-item">
                <div>
                  <strong className="timeline-period">{item.period}</strong>
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Approach</p>
              <h2>My approach</h2>
            </div>
          </div>
          <div className="card-grid">
            {content.approach.map((step) => (
              <article key={step.phase} className="feature-card">
                <p className="card-index">{step.phase}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Principles</p>
              <h2>Delivery principles</h2>
            </div>
          </div>
          <div className="card-grid">
            {content.principles.map((principle) => (
              <article key={principle.title} className="feature-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Testimonials</p>
              <h2>Client feedback</h2>
            </div>
          </div>
          <div className="quote-grid">
            {content.testimonials.map((testimonial) => (
              <blockquote key={testimonial.quote} className="quote-card">
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <footer>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="cta-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build together</h2>
            <p>
              Let&apos;s discuss your idea, architecture, or current implementation and shape the next phase with clarity.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-primary"
              href={content.contact.calendarHref}
              target={calendarIsExternal ? "_blank" : undefined}
              rel={calendarIsExternal ? "noreferrer" : undefined}
            >
              Schedule a Call
            </a>
            <a className="button button-secondary" href={content.contact.cvHref}>
              Download CV
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{content.hero.name}</strong>
          <p>{content.hero.title}</p>
        </div>
        <div className="footer-links">
          <a className="footer-icon-link" href={content.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <SocialIcon name="linkedin" />
          </a>
          <a className="footer-icon-link" href={content.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <SocialIcon name="github" />
          </a>
          <a className="footer-icon-link" href={content.social.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
            <SocialIcon name="scholar" />
          </a>
          <a className="footer-icon-link" href={content.social.upwork} target="_blank" rel="noreferrer" aria-label="Upwork">
            <SocialIcon name="upwork" />
          </a>
        </div>
      </footer>
    </div>
  );
}
