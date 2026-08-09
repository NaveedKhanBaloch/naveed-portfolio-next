import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { seedPortfolioContent } from "@/lib/seed";
import { getPortfolioContent } from "@/lib/storage";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type CaseStudyCard = {
  label?: string;
  title: string;
  description: string;
};

type ProjectCaseStudyPresentation = {
  proof: string[];
  wordmark: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  valueHeading: string;
  valueCards: CaseStudyCard[];
  contributionHeading: string;
  capabilityDetails: CaseStudyCard[];
  architectureHeading: string;
  ctaHeading: string;
  ctaCopy: string;
};

const projectPresentations: Record<string, ProjectCaseStudyPresentation> = {
  "ai-research-reviewer": {
    proof: ["Founder-built", "Live research tool", "Pre-submission review automation"],
    wordmark: "RESEARCH AI",
    valueHeading: "Research review built for submission confidence.",
    valueCards: [
      {
        label: "User Problem",
        title: "Authors need useful feedback before submission",
        description:
          "Researchers often submit papers without enough structured review, creating avoidable revision cycles and unclear improvement priorities."
      },
      {
        label: "Product Strategy",
        title: "AI feedback shaped like reviewer concerns",
        description:
          "The product converts uploaded manuscripts into organized review signals, concern areas, and practical author-facing reports."
      },
      {
        label: "Professional Value",
        title: "Better preparation for journals and supervisors",
        description:
          "The workflow helps authors, students, and research teams improve clarity before journal, conference, or supervisor review."
      }
    ],
    contributionHeading: "From research workflow to live review product.",
    capabilityDetails: [
      {
        title: "Manuscript review",
        description: "Uploaded papers are analyzed for structure, clarity, contribution, and improvement opportunities."
      },
      {
        title: "Reviewer concerns",
        description: "Feedback is framed around the type of issues reviewers and supervisors are likely to notice."
      },
      {
        title: "Review history",
        description: "Users can return to previous review sessions and compare feedback across manuscript iterations."
      },
      {
        title: "Downloadable reports",
        description: "Structured reports turn AI analysis into a practical artifact authors can use during revision."
      }
    ],
    architectureHeading: "Manuscript to review report flow",
    ctaHeading: "Need an AI product that turns expert review into usable feedback?",
    ctaCopy:
      "I can help design the review logic, user workflow, reporting layer, and deployment path for research or knowledge-work products."
  },
  "freja-ai": {
    proof: ["Live product", "Voice AI workflow", "Restaurant SaaS"],
    wordmark: "VOICE AI",
    valueHeading: "Voice AI built around restaurant reality.",
    valueCards: [
      {
        label: "Business Problem",
        title: "Missed calls become missed revenue",
        description:
          "Freja is positioned around a clear restaurant pain point: busy staff cannot answer every phone call during rush hours."
      },
      {
        label: "Product Strategy",
        title: "AI that fits kitchen operations",
        description:
          "The experience connects customer calls, multilingual ordering, kitchen tickets, transcripts, and staff handoff in one flow."
      },
      {
        label: "Commercial Story",
        title: "Direct orders, less platform dependency",
        description:
          "The product helps restaurants own more customer interactions while reducing reliance on high-commission delivery platforms."
      }
    ],
    contributionHeading: "From product positioning to working demo.",
    capabilityDetails: [
      {
        title: "Multilingual voice ordering",
        description:
          "Customers can place orders in the languages common to Nordic restaurant communities, reducing friction at the first interaction."
      },
      {
        title: "Kitchen-ready tickets",
        description:
          "Orders are structured into clear tickets so staff see quantities, customizations, delivery notes, and confirmation context."
      },
      {
        title: "Human handoff",
        description: "The workflow keeps staff in control when a call becomes complex, emotional, or better handled by a person."
      },
      {
        title: "Operational visibility",
        description:
          "Transcripts, recordings, and call analytics create a feedback loop for improving service quality and product adoption."
      }
    ],
    architectureHeading: "Call to kitchen ticket flow",
    ctaHeading: "Need an AI product that turns calls into usable workflows?",
    ctaCopy:
      "I can help define the product architecture, validate the AI workflow, and build a production-ready experience for real business operations."
  },
  learnoviax: {
    proof: ["Adaptive learning", "AI tutor agents", "Progress tracking"],
    wordmark: "LEARNING AI",
    valueHeading: "Adaptive learning designed for measurable mastery.",
    valueCards: [
      {
        label: "Learning Problem",
        title: "Static course pages do not adapt",
        description:
          "Students need guidance that responds to their level, gaps, quiz results, and learning progress instead of one-size-fits-all browsing."
      },
      {
        label: "Product Strategy",
        title: "Personalized paths with measurable progress",
        description:
          "The platform connects diagnostics, AI tutoring, quizzes, dashboards, and certificates into a coherent learning journey."
      },
      {
        label: "Market Value",
        title: "A stronger EdTech proof point",
        description:
          "LearnoviaX shows how AI can be used as a learning workflow, not just a chatbot placed beside course content."
      }
    ],
    contributionHeading: "From learning model to adaptive product experience.",
    capabilityDetails: [
      {
        title: "Adaptive paths",
        description: "Learners receive a guided route shaped by their goals, level, and performance signals."
      },
      {
        title: "AI tutor agents",
        description: "Tutor interactions help explain concepts, answer questions, and keep students moving through the path."
      },
      {
        title: "Quizzes",
        description: "Assessment checkpoints provide feedback loops for mastery, remediation, and progress decisions."
      },
      {
        title: "Certificates",
        description: "Completion artifacts give learners a clear outcome and make progress visible."
      }
    ],
    architectureHeading: "Learner to mastery flow",
    ctaHeading: "Need an AI learning platform that adapts to each user?",
    ctaCopy:
      "I can help shape adaptive learning architecture, AI tutor workflows, assessment logic, and learner-facing product experiences."
  },
  recrubotx: {
    proof: ["Hiring intelligence", "AI interviews", "Candidate reports"],
    wordmark: "HIRING AI",
    valueHeading: "Hiring workflows designed for faster decisions.",
    valueCards: [
      {
        label: "Recruiting Problem",
        title: "Screening creates repetitive decision work",
        description:
          "Recruiters need to compare resumes, interviews, rankings, and reports without scattering candidate evidence across tools."
      },
      {
        label: "Product Strategy",
        title: "One workspace for candidate evaluation",
        description:
          "Interveuu brings job posts, resume screening, AI interviews, candidate ranking, and report generation into one workflow."
      },
      {
        label: "Business Value",
        title: "Clearer shortlists with less manual review",
        description:
          "The product helps hiring teams move from candidate volume to structured evidence and decision-ready reports."
      }
    ],
    contributionHeading: "From recruiter pain points to evaluation workflow.",
    capabilityDetails: [
      {
        title: "Resume screening",
        description: "Candidate CVs are reviewed against job requirements to surface fit signals quickly."
      },
      {
        title: "AI interviews",
        description: "Structured interview experiences help capture comparable candidate responses."
      },
      {
        title: "Candidate rankings",
        description: "Recruiters can prioritize shortlists using scoring, evidence, and candidate comparison views."
      },
      {
        title: "PDF reports",
        description: "Hiring evidence is packaged into shareable reports for team review and client communication."
      }
    ],
    architectureHeading: "Job post to candidate report flow",
    ctaHeading: "Need an AI hiring product that makes screening more structured?",
    ctaCopy:
      "I can help design candidate workflows, evaluation logic, interview automation, dashboards, and report generation systems."
  },
  "doctor-botx": {
    proof: ["Clinical RAG", "Source grounded", "Safety-aware workflow"],
    wordmark: "CLINICAL AI",
    valueHeading: "Healthcare AI shaped around trust and review.",
    valueCards: [
      {
        label: "Clinical Problem",
        title: "Medical information must be traceable",
        description:
          "Clinicians and health teams need AI support that exposes sources, respects safety boundaries, and avoids unsupported claims."
      },
      {
        label: "Product Strategy",
        title: "Knowledge retrieval before response generation",
        description:
          "The workflow grounds answers in indexed clinical content, voice input, and review-oriented summaries."
      },
      {
        label: "Professional Value",
        title: "AI support without removing human judgment",
        description:
          "ClinIQ Assist demonstrates a practical healthcare pattern where AI supports knowledge access while clinicians remain in control."
      }
    ],
    contributionHeading: "From clinical knowledge access to safer AI support.",
    capabilityDetails: [
      {
        title: "Clinical RAG",
        description: "Relevant clinical knowledge is retrieved before answers are generated, improving traceability and context."
      },
      {
        title: "Speech input",
        description: "Voice interaction supports faster question capture in clinical or operational environments."
      },
      {
        title: "Source grounding",
        description: "Responses can be tied back to retrieved material so users can inspect where information comes from."
      },
      {
        title: "Safety boundaries",
        description: "The workflow is framed around decision support and review rather than autonomous medical decision-making."
      }
    ],
    architectureHeading: "Clinical question to grounded response flow",
    ctaHeading: "Need healthcare AI that is useful, grounded, and reviewable?",
    ctaCopy:
      "I can help design RAG architecture, safety-aware workflows, voice interfaces, and clinician-facing AI product experiences."
  },
  bokafy: {
    proof: ["Booking automation", "Hospitality SaaS", "Reservation dashboard"],
    wordmark: "BOOKING AI",
    valueHeading: "Booking automation built for hospitality teams.",
    valueCards: [
      {
        label: "Operations Problem",
        title: "Reservations arrive from too many channels",
        description:
          "Restaurants and venues need booking flows that connect guest requests, availability, staff visibility, and follow-up."
      },
      {
        label: "Product Strategy",
        title: "Conversation to reservation management",
        description:
          "Bokafy connects conversational booking, table management, guest channels, and staff dashboards into one operational flow."
      },
      {
        label: "Business Value",
        title: "Less booking friction for guests and staff",
        description:
          "The product reduces manual coordination and gives hospitality teams a clearer view of reservation activity."
      }
    ],
    contributionHeading: "From booking friction to staff-friendly SaaS workflow.",
    capabilityDetails: [
      {
        title: "AI booking",
        description: "Guests can move through conversational reservation flows without waiting for manual back-and-forth."
      },
      {
        title: "Table management",
        description: "Availability and table context help staff understand what can be booked and when."
      },
      {
        title: "Guest channels",
        description: "The platform supports booking interactions across the channels guests naturally use."
      },
      {
        title: "Reservation dashboard",
        description: "Staff can review booking activity, manage reservations, and keep operations coordinated."
      }
    ],
    architectureHeading: "Guest request to reservation flow",
    ctaHeading: "Need an AI booking product that reduces operational friction?",
    ctaCopy:
      "I can help design conversational booking flows, staff dashboards, reservation logic, and hospitality SaaS architecture."
  },
  "yogasana-ai": {
    proof: ["Real-Time Pose Estimation", "Edge Computer Vision", "Mobile Fitness SaaS"],
    wordmark: "VISION AI",
    primaryCtaLabel: "Launch Interactive Demo",
    primaryCtaHref: "#product-capabilities",
    valueHeading: "Real-time alignment assistance built for personal practice.",
    valueCards: [
      {
        label: "Business Problem",
        title: "Incorrect form risks long-term musculoskeletal strain",
        description:
          "Yoga practitioners often practice independently without expert supervision. Poor form during complex postures such as Trikonasana or Chaturanga can lead to joint misalignment, spinal stress, and acute ligament injuries."
      },
      {
        label: "Product Strategy",
        title: "On-device biomechanical pose estimation",
        description:
          "The solution runs real-time skeleton tracking directly on mobile hardware, calculating joint-angle accuracy against anatomical baselines to provide immediate visual and audio alignment cues."
      },
      {
        label: "Commercial Story",
        title: "Accessible, private, hardware-free wellness",
        description:
          "Edge inference on the smartphone camera feed removes the need for expensive motion-capture wearables while keeping visual data on the user's device."
      }
    ],
    contributionHeading: "From skeletal keypoint inference to smooth mobile UI feedback.",
    capabilityDetails: [
      {
        title: "Real-time skeleton tracking",
        description:
          "Detects 33+ anatomical keypoints with continuous tracking designed for partial occlusion and complex body positions."
      },
      {
        title: "Angle precision and form scoring",
        description:
          "Compares shoulder, hip, knee, and ankle vectors with target geometric templates to calculate a live posture-alignment score."
      },
      {
        title: "Active injury prevention",
        description:
          "Highlights vulnerable joints when knee deflection, lumbar extension, or another tracked angle moves outside configured safety thresholds."
      },
      {
        title: "Voice-guided form feedback",
        description:
          "Context-aware audio cues explain which movement to adjust while the user remains focused on the pose."
      }
    ],
    architectureHeading: "Camera capture to instant pose feedback flow",
    ctaHeading: "Need an AI vision workflow that turns camera feeds into real-time operational insights?",
    ctaCopy:
      "I can help define the edge computing architecture, optimize neural network inference on mobile devices, and build production-ready applications for real-world interactions."
  }
};

function HeroMotionField() {
  return (
    <div className="hero-motion-field" aria-hidden="true">
      <span className="hero-circuit-line hero-circuit-line-one"></span>
      <span className="hero-circuit-line hero-circuit-line-two"></span>
      <span className="hero-circuit-line hero-circuit-line-three"></span>
      <span className="hero-wireframe hero-wireframe-primary">
        <span></span>
        <span></span>
      </span>
      <span className="hero-wireframe hero-wireframe-secondary">
        <span></span>
        <span></span>
      </span>
      <div className="hero-node-field">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
}

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
  const presentation = projectPresentations[project.slug] ?? {
    proof: [caseStudy.status, project.category, "Case study"],
    wordmark: "AI SYSTEMS",
    valueHeading: `${project.name} built around real product value.`,
    valueCards: [
      {
        label: "Problem",
        title: "A workflow worth improving",
        description: caseStudy.challenge
      },
      {
        label: "Strategy",
        title: "Product clarity before implementation",
        description: project.impact
      },
      {
        label: "Outcome",
        title: "A usable AI product story",
        description: caseStudy.outcomes[0] ?? project.description
      }
    ],
    contributionHeading: "From product problem to implementation path.",
    capabilityDetails: project.features.map((feature) => ({
      title: feature,
      description: `A user-facing capability designed to support the ${project.category.toLowerCase()} workflow.`
    })),
    architectureHeading: "User action to product outcome flow",
    ctaHeading: `Need an AI product like ${project.name}?`,
    ctaCopy:
      "I can help define the architecture, validate the workflow, and build the AI product with production constraints in mind."
  };
  const primaryCtaHref = presentation.primaryCtaHref ?? project.href;
  const primaryCtaLabel = presentation.primaryCtaLabel ?? "Open Live Product";

  return (
    <div className={`simple-page case-study-page featured-case-study project-${project.slug}`}>
      <SiteNav content={content} />
      <header className="case-study-hero featured-case-study-hero">
        <HeroMotionField />
        <div className="featured-case-study-hero-grid">
          <div className="case-study-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
            <p>{caseStudy.overview}</p>
            <div className="featured-proof-strip" aria-label="Project proof">
              {presentation.proof.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="case-study-actions">
              {primaryCtaHref ? (
                <a
                  className="button button-primary"
                  href={primaryCtaHref}
                  target={primaryCtaHref.startsWith("http") ? "_blank" : undefined}
                  rel={primaryCtaHref.startsWith("http") ? "noreferrer" : undefined}
                >
                  {primaryCtaLabel}
                </a>
              ) : null}
              <a className="button button-secondary" href={content.hero.primaryCtaHref} target="_blank" rel="noreferrer">
                Discuss a Similar Project
              </a>
            </div>
          </div>
          <div className="featured-product-frame">
            <Image
              src={project.image}
              alt={`${project.name} project interface`}
              width={project.slug === "yogasana-ai" ? 1448 : 1000}
              height={project.slug === "yogasana-ai" ? 1086 : 720}
              priority
            />
          </div>
        </div>
      </header>

      <section className="case-study-snapshot featured-snapshot">
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

      <section className="content-section editorial-case-study-section" data-wordmark={presentation.wordmark}>
        <div>
          <p className="eyebrow">Value Story</p>
          <h2>{presentation.valueHeading}</h2>
        </div>
        <div className="editorial-value-grid">
          {presentation.valueCards.map((card) => (
            <article key={card.title}>
              {card.label ? <span>{card.label}</span> : null}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section featured-contribution-section">
        <div className="case-study-two-col">
          <div>
            <p className="eyebrow">My Contribution</p>
            <h2>{presentation.contributionHeading}</h2>
          </div>
          <div className="featured-contribution-list">
            {caseStudy.responsibilities.map((responsibility) => (
              <article key={responsibility}>
                <span></span>
                <p>{responsibility}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="product-capabilities" className="content-section featured-capabilities-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Product Capabilities</p>
            <h2>What the user actually gets</h2>
          </div>
        </div>
        <div className="featured-capability-grid">
          {presentation.capabilityDetails.map((capability) => (
            <article key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section featured-flow-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">System Architecture</p>
            <h2>{presentation.architectureHeading}</h2>
          </div>
        </div>
        <div className="featured-architecture-flow">
          {caseStudy.architecture.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section featured-outcomes-section">
        <div className="case-study-columns">
          <article>
            <p className="eyebrow">Outcomes</p>
            <h2>What this proves</h2>
            <ul className="feature-list">
              {caseStudy.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="eyebrow">Technology</p>
            <h2>Core stack</h2>
            <div className="tag-row">
              {project.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="cta-panel featured-case-study-cta">
        <div>
          <p className="eyebrow">Work together</p>
          <h2>{presentation.ctaHeading}</h2>
          <p>{presentation.ctaCopy}</p>
        </div>
        <div className="cta-actions">
          {primaryCtaHref ? (
            <a
              className="button button-primary"
              href={primaryCtaHref}
              target={primaryCtaHref.startsWith("http") ? "_blank" : undefined}
              rel={primaryCtaHref.startsWith("http") ? "noreferrer" : undefined}
            >
              {primaryCtaLabel}
            </a>
          ) : null}
          <a className="button button-primary" href={content.contact.calendarHref} target="_blank" rel="noreferrer">
            Schedule a Call
          </a>
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
