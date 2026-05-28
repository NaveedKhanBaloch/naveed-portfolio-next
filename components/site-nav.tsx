import Link from "next/link";
import type { PortfolioContent } from "@/lib/types";

type SiteNavProps = {
  content: PortfolioContent;
  isHome?: boolean;
};

function sectionHref(isHome: boolean | undefined, section: string) {
  return isHome ? `#${section}` : `/#${section}`;
}

export function SiteNav({ content, isHome }: SiteNavProps) {
  const primaryCtaIsExternal = content.hero.primaryCtaHref.startsWith("http");

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span className="brand-mark">NK</span>
        <span>
          <strong>{content.hero.name}</strong>
          <small>{content.hero.title}</small>
        </span>
      </Link>
      <nav className="main-nav">
        <Link href={sectionHref(isHome, "services")}>Services</Link>
        <Link href={sectionHref(isHome, "projects")}>Projects</Link>
        <Link href={sectionHref(isHome, "experience")}>Experience</Link>
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
      <details className="mobile-nav">
        <summary className="mobile-nav-toggle" aria-label="Open navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </summary>
        <div className="mobile-nav-panel">
          <Link href={sectionHref(isHome, "services")}>Services</Link>
          <Link href={sectionHref(isHome, "projects")}>Projects</Link>
          <Link href={sectionHref(isHome, "experience")}>Experience</Link>
          <Link href="/academia">Academia</Link>
          <a
            className="button button-primary mobile-nav-cta"
            href={content.hero.primaryCtaHref}
            target={primaryCtaIsExternal ? "_blank" : undefined}
            rel={primaryCtaIsExternal ? "noreferrer" : undefined}
          >
            Book a Call
          </a>
        </div>
      </details>
    </header>
  );
}
