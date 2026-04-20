import Link from "next/link";
import { getPortfolioContent } from "@/lib/storage";

export default async function AcademiaPage() {
  const content = await getPortfolioContent();
  const publications = [...content.publications].sort((a, b) => b.year - a.year);

  return (
    <div className="simple-page">
      <header className="simple-header">
        <Link href="/" className="text-link">
          Back to portfolio
        </Link>
        <div className="simple-header-top">
          <div className="simple-header-copy">
            <p className="eyebrow">Academia</p>
            <h1>Research publications</h1>
            <p>
              Proven research depth that helps clients de-risk AI decisions, choose stronger technical directions, and build with more confidence.
              If you need someone who can turn advanced AI expertise into practical business outcomes, this is the foundation behind my work.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={content.social.scholar} target="_blank" rel="noreferrer">
              View Google Scholar
            </a>
          </div>
        </div>
      </header>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Selected Publications</h2>
          </div>
        </div>
        <div className="metrics-grid">
          <article className="metric-card">
            <strong>894</strong>
            <h2>Citations</h2>
            <p>757 since 2020</p>
          </article>
          <article className="metric-card">
            <strong>15</strong>
            <h2>h-index</h2>
            <p>14 since 2020</p>
          </article>
          <article className="metric-card">
            <strong>17</strong>
            <h2>i10-index</h2>
            <p>15 since 2020</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="publication-list">
          {publications.map((publication) => (
            <article key={publication.slug} className="publication-card">
              <div className="publication-top">
                <div>
                  <p className="eyebrow">Publication</p>
                  <h2>{publication.title}</h2>
                </div>
                <span className="publication-year">{publication.year}</span>
              </div>
              <p className="publication-authors">{publication.authors}</p>
              <div className="publication-venue-row">
                <p className="publication-venue">{publication.venue}</p>
                {publication.impactFactor ? (
                  <a
                    className="impact-pill"
                    href={publication.impactFactorSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Impact Factor {publication.impactFactor}
                  </a>
                ) : null}
              </div>
              <p>{publication.abstract}</p>
              <div className="tag-row">
                {publication.keywords.map((keyword) => (
                  <span key={keyword} className="tag">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="publication-meta">
                <a className="citation-pill" href={publication.citationSourceUrl} target="_blank" rel="noreferrer">
                  {publication.citationCount !== null ? `${publication.citationCount} citations` : "Citation count unavailable"}
                </a>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href={publication.publicationUrl} target="_blank" rel="noreferrer">
                  Open paper
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
