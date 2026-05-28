import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPortfolioContent } from "@/lib/storage";
import { seedPortfolioContent } from "@/lib/seed";
import { SiteNav } from "@/components/site-nav";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seedPortfolioContent.projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getPortfolioContent();
  const project = content.projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: `${project.name} Case Study | ${content.hero.name}`,
    description: project.description
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const content = await getPortfolioContent();
  const project = content.projects.find((item) => item.slug === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const caseStudy = project.caseStudy;
  const otherProjects = content.projects.filter((item) => item.slug !== project.slug);

  return (
    <div className="simple-page case-study-page">
      <SiteNav content={content} />
      <header className="case-study-hero">
        <Link href="/#projects" className="text-link">
          Back to projects
        </Link>
        <div className="case-study-hero-grid">
          <div className="case-study-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
            <p>{caseStudy.overview}</p>
            <div className="case-study-actions">
              {project.href ? (
                <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">
                  Launch Live Tool
                </a>
              ) : null}
              <a className="button button-primary" href={content.hero.primaryCtaHref} target="_blank" rel="noreferrer">
                Discuss a Similar Project
              </a>
              <a className="button button-secondary" href={content.contact.cvHref}>
                Download CV
              </a>
            </div>
          </div>
          <div className="case-study-hero-image">
            <Image src={project.image} alt={`${project.name} project interface`} width={1000} height={720} priority />
          </div>
        </div>
      </header>

      <section className="case-study-snapshot">
        <article>
          <span>Client Type</span>
          <strong>{caseStudy.clientType}</strong>
        </article>
        <article>
          <span>Role</span>
          <strong>{caseStudy.role}</strong>
        </article>
        <article>
          <span>Timeline</span>
          <strong>{caseStudy.timeline}</strong>
        </article>
        <article>
          <span>Status</span>
          <strong>{caseStudy.status}</strong>
        </article>
      </section>

      <section className="content-section case-study-section">
        <div className="case-study-two-col">
          <div>
            <p className="eyebrow">Challenge</p>
            <h2>What needed to change</h2>
          </div>
          <div className="stacked-copy">
            <p>{caseStudy.challenge}</p>
            <div className="case-study-note">
              <strong>Team context</strong>
              <p>{caseStudy.team}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Goals & Constraints</p>
            <h2>Business clarity before implementation</h2>
          </div>
        </div>
        <div className="case-study-columns">
          <article className="case-study-panel">
            <h3>Goals</h3>
            <ul className="feature-list">
              {caseStudy.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </article>
          <article className="case-study-panel">
            <h3>Constraints</h3>
            <ul className="feature-list">
              {caseStudy.constraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="case-study-two-col">
          <div>
            <p className="eyebrow">My Role</p>
            <h2>Where I created leverage</h2>
          </div>
          <ul className="feature-list feature-list-strong">
            {caseStudy.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Architecture</p>
            <h2>System design</h2>
          </div>
        </div>
        <div className="architecture-flow">
          {caseStudy.architecture.map((item, index) => (
            <article key={item} className="architecture-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Process</p>
            <h2>How the project moved forward</h2>
          </div>
        </div>
        <div className="case-study-grid">
          {caseStudy.process.map((step, index) => (
            <article key={step.title} className="feature-card">
              <p className="card-index">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Decisions</p>
            <h2>Tradeoffs that mattered</h2>
          </div>
        </div>
        <div className="case-study-grid">
          {caseStudy.decisions.map((decision) => (
            <article key={decision.title} className="case-study-panel">
              <h3>{decision.title}</h3>
              <p>{decision.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Outcomes</p>
            <h2>What the work made possible</h2>
          </div>
        </div>
        <div className="case-study-columns">
          <article className="case-study-panel">
            <h3>Impact signals</h3>
            <ul className="feature-list">
              {caseStudy.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
          <article className="case-study-panel">
            <h3>Deliverables</h3>
            <div className="tag-row">
              {caseStudy.deliverables.map((deliverable) => (
                <span key={deliverable} className="tag">
                  {deliverable}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Roadmap</p>
            <h2>Next improvements</h2>
          </div>
        </div>
        <div className="case-study-grid">
          {caseStudy.nextSteps.map((step) => (
            <article key={step} className="case-study-panel">
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technology</p>
            <h2>Core stack</h2>
          </div>
        </div>
        <div className="tag-row">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <div>
          <p className="eyebrow">Work together</p>
          <h2>Need a system like {project.name}?</h2>
          <p>
            I can help you define the architecture, validate the workflow, and build the AI product with production constraints in mind.
          </p>
        </div>
        <div className="cta-actions">
          {project.href ? (
            <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">
              Open Live Product
            </a>
          ) : null}
          <a className="button button-primary" href={content.contact.calendarHref} target="_blank" rel="noreferrer">
            Schedule a Call
          </a>
          <Link className="button button-secondary" href="/#projects">
            View More Work
          </Link>
        </div>
      </section>

      {otherProjects.length ? (
        <section className="content-section case-study-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">More projects</p>
              <h2>Related case studies</h2>
            </div>
          </div>
          <div className="case-study-grid">
            {otherProjects.map((item) => (
              <Link key={item.slug} className="case-study-panel case-study-related" href={`/projects/${item.slug}`}>
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
