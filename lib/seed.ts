import type { PortfolioContent } from "@/lib/types";

export const seedPortfolioContent: PortfolioContent = {
  hero: {
    name: "Dr. Naveed Khan Baloch",
    title: "AI Systems Architect",
    subtitle: "Building reliable AI systems for real products.",
    summary:
      "I help startups and established teams launch dependable AI systems, from strategy and prototyping to production deployment, with a focus on healthcare, automation, hiring, and intelligent SaaS.",
    location: "Taxila, Pakistan",
    availability: "Available for consulting, fractional AI leadership, and build partnerships.",
    primaryCtaLabel: "Book a 30-Min Strategy Call",
    primaryCtaHref: "https://calendly.com/naveedk09/30min",
    secondaryCtaLabel: "Download CV",
    secondaryCtaHref: "/data/NaveedCV.pdf",
    image: "/images/Latest.webp",
    badges: [
      "PhD in Computer Engineering",
      "20+ peer-reviewed publications",
      "Top-Rated Plus AI Engineer"
    ],
    stack: [
      "Python",
      "PyTorch",
      "LangGraph",
      "OpenAI",
      "AWS",
      "Docker",
      "Supabase"
    ]
  },
  about: {
    headline: "Bridging research depth with business-ready execution.",
    summary:
      "My work sits at the intersection of AI research, product strategy, and engineering delivery. I design systems that are explainable, scalable, and useful in the real world, whether that means multi-agent workflows, retrieval-augmented generation, evaluation pipelines, or AI product roadmaps for growing teams.",
    highlights: [
      "Built production AI systems for clients across the USA, Canada, and Europe.",
      "Led academic research and mentorship while staying hands-on with modern AI delivery.",
      "Designed healthcare, EdTech, recruitment, and automation products with measurable outcomes.",
      "Comfortable across architecture, experimentation, APIs, deployment, and stakeholder communication."
    ]
  },
  metrics: [
    {
      label: "Years Building",
      value: "12+",
      detail: "AI systems, software products, and applied research"
    },
    {
      label: "Published Work",
      value: "20+",
      detail: "Peer-reviewed papers in intelligent computing"
    },
    {
      label: "Delivery Footprint",
      value: "Global",
      detail: "Remote collaboration with international teams"
    }
  ],
  services: [
    {
      title: "AI Product Strategy",
      description: "Roadmapping the right product and workflow before expensive implementation begins.",
      outcomes: [
        "Use-case prioritization",
        "Architecture recommendations",
        "Evaluation and rollout plans"
      ]
    },
    {
      title: "LLM and Agent Systems",
      description: "Building robust copilots, RAG pipelines, and autonomous workflows that support real operational use.",
      outcomes: [
        "Multi-agent orchestration",
        "Retrieval and tool use",
        "Guardrails and observability"
      ]
    },
    {
      title: "Custom AI Delivery",
      description: "Shipping full-stack AI products, APIs, and dashboards with deployment and iteration in mind.",
      outcomes: [
        "Backend APIs",
        "Data integrations",
        "Cloud-ready deployment"
      ]
    }
  ],
  projects: [
    {
      slug: "ai-research-reviewer",
      name: "AI Research Reviewer",
      category: "Research Automation",
      description:
        "Researchers upload manuscripts and receive structured AI feedback before journal, conference, or supervisor submission.",
      impact: "Turns uploaded manuscripts into structured review feedback, improvement signals, and downloadable decision-support reports.",
      image: "/images/research-reviewer.png",
      features: ["Manuscript Review", "Reviewer Concerns", "Review History", "Downloadable Reports"],
      tech: ["Next.js", "React", "AI Review Workflows", "Report Generation"],
      href: "https://reviewer.plenware.cloud/",
      caseStudy: {
        clientType: "Researchers, PhD scholars, supervisors, labs, and academic writing teams",
        timeline: "Live product, deployed and available for public use",
        role: "Founder, AI product architect, and full-stack implementation lead",
        team: "Designed and built as an applied research productivity product",
        status: "Live product",
        overview:
          "AI Research Reviewer is a live web application for pre-submission manuscript review. Researchers can submit manuscripts, track review progress, review generated feedback, and use structured reports to improve quality before formal journal, conference, supervisor, or internal review.",
        challenge:
          "Researchers often discover weaknesses only after supervisor feedback, desk rejection, or peer review. The challenge was to build a tool that gives useful pre-submission feedback without pretending to replace human reviewers, editors, ethics committees, or publication judgment.",
        goals: [
          "Help authors identify likely reviewer concerns before submission.",
          "Generate structured feedback on clarity, methodology, novelty, presentation, and research quality.",
          "Provide a workspace for manuscript submissions, review history, notifications, and report access.",
          "Position AI output as decision-support feedback that researchers can verify and improve."
        ],
        constraints: [
          "The product needed clear user responsibility and terms for unpublished or sensitive research materials.",
          "AI-generated feedback had to be framed as review assistance, not guaranteed publication advice.",
          "The workflow needed to support manuscript status, review progress, completed reports, and failed submission states.",
          "The interface had to be usable for academic users who care about clarity more than decorative product complexity."
        ],
        responsibilities: [
          "Defined the product positioning as a pre-submission manuscript review assistant.",
          "Designed the submission, review-history, dashboard, notifications, and report-review workflows.",
          "Created safety and terms language around AI-generated research feedback and manuscript handling.",
          "Deployed the application as a live product with public access at reviewer.plenware.cloud."
        ],
        architecture: [
          "Public landing and authentication layer introduces the service and manages account access.",
          "Submission workflow captures manuscript materials and metadata for automated review.",
          "Processing layer generates structured review feedback, recommendation signals, and quality scores.",
          "Workspace layer supports dashboard, analytics, profile, help docs, notifications, and review history.",
          "Report layer presents completed review output and supports researcher follow-up actions."
        ],
        process: [
          {
            title: "Problem framing",
            description:
              "Defined the product around pre-submission improvement rather than acceptance prediction, keeping expectations realistic for academic users."
          },
          {
            title: "Workflow design",
            description:
              "Mapped the researcher journey from account access and manuscript submission to processing status, notifications, and final report review."
          },
          {
            title: "Responsible AI framing",
            description:
              "Added terms and product language that explain the limits of AI-generated review feedback and the user's responsibility for verification."
          },
          {
            title: "Live deployment",
            description:
              "Published the tool as a working web app so prospects, researchers, and hiring teams can interact with the product directly."
          }
        ],
        decisions: [
          {
            title: "Live product over static demo",
            description:
              "The project is available online so visitors can verify the work themselves instead of only reading a description."
          },
          {
            title: "Decision support positioning",
            description:
              "The tool helps authors improve manuscripts but does not claim to replace peer review, editorial judgment, or ethics review."
          },
          {
            title: "Researcher workspace model",
            description:
              "The app includes submission history, dashboard views, notifications, and account areas to feel like a real productivity product."
          }
        ],
        outcomes: [
          "Launched a publicly accessible AI research review product.",
          "Created a practical workflow for manuscript submission, review tracking, and generated feedback.",
          "Strengthened the portfolio with a live tool that visitors can open and use.",
          "Demonstrated applied AI product thinking across research, UX, safety language, and deployment."
        ],
        deliverables: [
          "Live web application",
          "Manuscript submission workflow",
          "AI review report flow",
          "User dashboard and review history",
          "Terms and privacy pages"
        ],
        nextSteps: [
          "Add discipline-specific review templates for medicine, engineering, computer science, and social sciences.",
          "Introduce reviewer-style rubrics for different journal or conference expectations.",
          "Add exportable improvement checklists for authors and supervisors."
        ]
      }
    },
    {
      slug: "freja-ai",
      name: "Freja AI",
      category: "Voice AI for Restaurants",
      description:
        "Restaurant teams use AI voice ordering to answer calls, capture multilingual orders, and route kitchen-ready tickets.",
      impact: "Helps restaurants recover missed calls and handle rush-hour phone orders without pulling staff away from service.",
      image: "/images/freja-ai.png",
      features: ["Voice Ordering", "Multilingual Calls", "Kitchen Tickets", "Call Analytics"],
      tech: ["Next.js", "React", "ElevenLabs", "Voice AI", "Dashboard UX"],
      href: "https://freja.plenware.cloud/",
      caseStudy: {
        clientType: "Pizza restaurants, quick-service operators, and hospitality SaaS founders",
        timeline: "Live product, deployed for product validation and demos",
        role: "AI product architect, voice workflow designer, and full-stack implementation lead",
        team: "Built around restaurant operations, voice ordering, and dashboard workflows",
        status: "Live product",
        overview:
          "Freja AI is a live voice-ordering product for Nordic pizza restaurants. It answers phone calls, understands multilingual customers, captures custom pizza orders, confirms details, and routes structured tickets to a kitchen dashboard so staff can focus on preparing food.",
        challenge:
          "Independent restaurants lose revenue when calls go unanswered during rush hours, yet hiring dedicated phone staff is expensive and delivery platforms take a large commission. The challenge was to create a voice AI workflow that handles real restaurant complexity while keeping staff in control.",
        goals: [
          "Answer every customer call during busy restaurant periods.",
          "Handle multilingual ordering for Swedish, English, Arabic, Somali, Turkish, Urdu, and Kurdish customers.",
          "Capture complex pizza modifications, allergy notes, addresses, and order confirmations.",
          "Send clear, real-time kitchen tickets and preserve call recordings/transcripts for review."
        ],
        constraints: [
          "Restaurant calls happen in noisy, time-sensitive environments.",
          "Pizza orders include custom halves, removals, extras, allergy notes, and delivery details.",
          "The system needed human handoff when a request becomes complex or a customer is frustrated.",
          "The product had to communicate value quickly to non-technical restaurant owners."
        ],
        responsibilities: [
          "Designed the product positioning around missed-call recovery and direct order ownership.",
          "Mapped the end-to-end voice ordering flow from incoming call to kitchen ticket.",
          "Structured the dashboard concept for live orders, transcripts, analytics, and menu administration.",
          "Created a public product site with demo, pricing, comparison, and conversion sections."
        ],
        architecture: [
          "Phone call layer receives customer calls and starts the voice ordering session.",
          "Voice AI layer detects language, captures order intent, and manages the customer conversation.",
          "Order interpretation layer structures pizzas, customizations, quantities, delivery notes, and totals.",
          "Kitchen dashboard layer displays confirmed tickets in real time for staff action.",
          "Analytics layer tracks saved calls, order patterns, call transcripts, and operational performance."
        ],
        process: [
          {
            title: "Operational research",
            description:
              "Framed the problem around real restaurant pressure: rush-hour calls, kitchen interruptions, language barriers, and delivery platform commission."
          },
          {
            title: "Voice flow design",
            description:
              "Designed conversation paths for greeting, language handling, pizza customization, confirmation, and escalation to staff."
          },
          {
            title: "Dashboard modeling",
            description:
              "Defined the staff-facing workflow for kitchen tickets, transcripts, recordings, analytics, and order review."
          },
          {
            title: "Product launch page",
            description:
              "Built a public-facing product experience with Swedish-first messaging, demo access, pricing, comparison, and lead capture."
          }
        ],
        decisions: [
          {
            title: "Restaurant-specific AI instead of generic voice bot",
            description:
              "The workflow is tailored to pizza ordering details such as half-and-half pizzas, toppings, allergy notes, and kitchen-ready tickets."
          },
          {
            title: "Human handoff for edge cases",
            description:
              "Freja keeps staff in control by transferring complex or frustrated-customer calls with transcript context."
          },
          {
            title: "Direct-order value proposition",
            description:
              "The product emphasizes saved calls, lower commission dependency, and restaurant-owned customer data."
          }
        ],
        outcomes: [
          "Launched a live voice AI product site for restaurant ordering.",
          "Demonstrated multilingual AI ordering with dashboard and kitchen-ticket positioning.",
          "Created a strong vertical SaaS story for hospitality automation.",
          "Made the product accessible for prospects through a live demo and direct dashboard entry point."
        ],
        deliverables: [
          "Live product website",
          "Voice ordering flow",
          "Restaurant dashboard concept",
          "Kitchen ticket workflow",
          "Pricing and demo funnel"
        ],
        nextSteps: [
          "Connect the ordering flow to real POS systems used by Nordic restaurants.",
          "Add restaurant-specific menu ingestion and menu-admin workflows.",
          "Pilot the product with real restaurants and measure missed-call recovery, average order value, and staff time saved."
        ]
      }
    },
    {
      slug: "learnoviax",
      name: "LearnoviaX",
      category: "Adaptive Learning Platform",
      description:
        "Personalized learning paths, quizzes, progress tracking, and AI tutor agents guide students toward measurable mastery.",
      impact: "Turns static course browsing into a measurable learning flow with diagnostics, roadmaps, dashboards, and certificates.",
      image: "/images/learnoviax.png",
      features: ["Adaptive Paths", "AI Tutor Agents", "Quizzes", "Certificates"],
      tech: ["Next.js", "React", "Supabase", "AI Agents", "Adaptive Learning"],
      href: "https://www.learnoviax.dev/",
      caseStudy: {
        clientType: "Students, self-learners, online education teams, and EdTech founders",
        timeline: "Live platform, deployed for learner onboarding and product validation",
        role: "Founder, AI product architect, and full-stack implementation lead",
        team: "Built as an adaptive education product spanning curriculum, learner UX, and platform workflows",
        status: "Live product",
        overview:
          "LearnoviaX is a live adaptive learning platform built around personalized mastery. It helps learners choose courses or career roadmaps, complete onboarding, track progress, take quizzes, follow recommended next lessons, and receive AI-guided learning paths based on performance and goals.",
        challenge:
          "Most online learning products present the same curriculum to every learner, even though students differ in goals, confidence, pace, prior knowledge, and motivation. The challenge was to build a platform that feels personal, diagnostic, and progress-driven rather than a static course catalog.",
        goals: [
          "Create adaptive learning paths that respond to learner goals and performance.",
          "Use AI-agent positioning to make personalization understandable and engaging.",
          "Support courses, career roadmaps, quizzes, progress tracking, certificates, and learner profiles.",
          "Make onboarding simple enough for new learners while still capturing useful personalization signals."
        ],
        constraints: [
          "The learning experience needed to feel motivating without becoming visually childish.",
          "Course and roadmap structures had to support both beginners and career-focused learners.",
          "Personalization needed clear learner-facing explanations, not a hidden black box.",
          "The platform needed account, dashboard, profile, certificate, and progress flows that feel like a real product."
        ],
        responsibilities: [
          "Designed the platform positioning around adaptive, emotionally intelligent, multi-agent learning.",
          "Mapped learner journeys across onboarding, course selection, roadmap exploration, lesson flow, quiz flow, and certificates.",
          "Structured content models for courses, roadmaps, phases, lessons, quiz scores, learner profiles, and achievements.",
          "Built a live product experience with marketing pages, authentication, dashboard, catalog, pricing, about, contact, profile, and certificate views."
        ],
        architecture: [
          "Public product layer explains the adaptive learning promise, AI agents, courses, pricing, and contact paths.",
          "Onboarding layer captures learner goals, background, and preferences for personalization.",
          "Course and roadmap layer organizes individual courses and career paths into structured learning sequences.",
          "Learning workspace layer tracks progress, quiz results, XP, lessons completed, active course, and achievements.",
          "Certificate layer generates completion proof and reinforces learner motivation."
        ],
        process: [
          {
            title: "Learner journey design",
            description:
              "Mapped how a student moves from landing page curiosity to signup, onboarding, course selection, active learning, quiz completion, and certificate generation."
          },
          {
            title: "Adaptive product model",
            description:
              "Designed the platform around diagnostics, learner goals, progress data, and recommended learning paths instead of fixed one-size-fits-all content."
          },
          {
            title: "AI-agent positioning",
            description:
              "Created a multi-agent learning story so users can understand how the system diagnoses gaps, adapts paths, and supports mastery."
          },
          {
            title: "Platform workflows",
            description:
              "Implemented the supporting product surfaces: dashboard, profile, catalog, roadmap pages, quiz flow, lesson flow, onboarding, and certificates."
          }
        ],
        decisions: [
          {
            title: "Mastery-first positioning",
            description:
              "The product emphasizes guaranteed mastery, focused practice, and adaptive sequencing rather than passive video consumption."
          },
          {
            title: "Career roadmaps plus individual courses",
            description:
              "Learners can either follow a broader career path or select a specific course, making the platform useful for different levels of intent."
          },
          {
            title: "Visible learner progress",
            description:
              "Progress metrics, quiz scores, completed lessons, achievements, and certificates make learning feel measurable and motivating."
          }
        ],
        outcomes: [
          "Launched a live adaptive learning platform available at learnoviax.dev.",
          "Created a full EdTech product flow from acquisition and onboarding to active learning and certificate generation.",
          "Demonstrated applied AI product thinking in education, personalization, and learner engagement.",
          "Added a strong live SaaS proof point for remote EdTech, AI product, and full-stack opportunities."
        ],
        deliverables: [
          "Live EdTech platform",
          "Adaptive learning journey",
          "Course and roadmap catalog",
          "Learner dashboard and profile",
          "Quiz and certificate workflows"
        ],
        nextSteps: [
          "Add deeper AI tutor interactions inside lessons and quizzes.",
          "Introduce instructor/admin analytics for cohorts and learning outcomes.",
          "Expand adaptive diagnostics with skill-gap testing before each roadmap."
        ]
      }
    },
    {
      slug: "recrubotx",
      name: "Interveuu",
      category: "Hiring Intelligence",
      description:
        "Recruiters manage job posts, screen resumes, run AI interviews, and review candidate reports from one hiring workspace.",
      impact: "Combines CV screening, candidate rankings, interview reports, resume tools, and recruiter dashboards in one workflow.",
      image: "/images/recrubotx.png",
      features: ["Resume Screening", "AI Interviews", "Candidate Rankings", "PDF Reports"],
      tech: ["Next.js", "React", "AI Interviews", "PDF Generation", "Admin Dashboards"],
      href: "https://recrubotx.vercel.app/",
      caseStudy: {
        clientType: "Recruiters, HR teams, job platforms, and hiring automation founders",
        timeline: "Live product, deployed for recruiter and candidate workflows",
        role: "AI product architect and full-stack implementation lead",
        team: "Built around recruiter operations, candidate experience, and administrative monitoring",
        status: "Live product",
        overview:
          "Interveuu is a live AI-powered interview and recruitment platform. It gives recruiters tools for job posting, resume analysis, CV batch screening, candidate rankings, AI interview reports, and downloadable evaluation PDFs while giving candidates a portal for jobs, interviews, resume building, and profile management.",
        challenge:
          "Hiring teams often move between job descriptions, resumes, interview notes, candidate scoring sheets, and manual reports. The challenge was to bring those steps into one AI-assisted platform while keeping recruiters in control of screening criteria, interview outcomes, and final decisions.",
        goals: [
          "Let recruiters create and manage job postings with required role details and interview questions.",
          "Screen uploaded CVs against job descriptions using configurable evaluation weights.",
          "Rank candidates with match scores, interview scores, recommendations, and downloadable reports.",
          "Support candidate-side job applications, AI interviews, resume analysis, and resume building."
        ],
        constraints: [
          "Recruiters needed simple workflows despite multiple surfaces: job posting, screening, reports, rankings, and settings.",
          "Candidate evaluation had to combine multiple signals without hiding how scores are used.",
          "The product needed separate candidate, recruiter, and super-admin access patterns.",
          "Generated reports needed to be useful for human review rather than replacing hiring judgment."
        ],
        responsibilities: [
          "Designed the recruiter workflow from job posting to CV screening, candidate rankings, and report review.",
          "Structured candidate workflows for job browsing, applications, interviews, resume analysis, and resume building.",
          "Implemented product surfaces for recruiter dashboards, interview reports, settings, and screening batches.",
          "Added super-admin monitoring for candidates, recruiters, admins, and platform activity."
        ],
        architecture: [
          "Recruiter portal manages job postings, resume analyzer batches, candidate rankings, interview reports, and account settings.",
          "Candidate portal supports job discovery, applications, AI interview sessions, resume analysis, and resume builder workflows.",
          "Screening layer compares CVs against job descriptions using weighted criteria and returns ranked candidates.",
          "Interview reporting layer generates score breakdowns, transcript analysis, recommendations, and PDF evaluation reports.",
          "Super-admin layer tracks candidates, recruiters, admin accounts, and activity such as CV upload, screening, and resume analysis."
        ],
        process: [
          {
            title: "Hiring workflow mapping",
            description:
              "Mapped the recruiter journey across job creation, CV upload, screening, candidate ranking, interview review, and final report download."
          },
          {
            title: "Candidate experience design",
            description:
              "Created candidate-side flows for signup, job applications, interview participation, resume analysis, and resume building."
          },
          {
            title: "AI scoring and reports",
            description:
              "Structured candidate evaluation around CV score, interview score, overall match score, feedback, and hiring recommendation output."
          },
          {
            title: "Operational admin layer",
            description:
              "Added administrative views for monitoring platform usage, candidates, recruiters, admin accounts, and user activity."
          }
        ],
        decisions: [
          {
            title: "Multi-portal product structure",
            description:
              "The platform separates candidate, recruiter, and super-admin workflows so each user type sees the tools they need."
          },
          {
            title: "Weighted CV screening",
            description:
              "Recruiters can align screening with job requirements instead of relying on a generic resume score."
          },
          {
            title: "Reports as decision support",
            description:
              "The product generates summaries, scores, and recommendations while leaving final hiring decisions to recruiters."
          }
        ],
        outcomes: [
          "Launched a live hiring automation platform with recruiter, candidate, and admin portals.",
          "Created a complete workflow for job posting, CV screening, candidate ranking, AI interview reporting, and PDF report download.",
          "Improved hiring process structure by combining resume signals, interview performance, and recommendations in one interface.",
          "Strengthened the portfolio with a real HR-tech product visitors can open and explore."
        ],
        deliverables: [
          "Live recruitment platform",
          "Recruiter dashboard",
          "CV batch screening workflow",
          "Candidate interview reports",
          "Candidate resume builder",
          "Super-admin monitoring"
        ],
        nextSteps: [
          "Add ATS integrations for Greenhouse, Lever, Workable, or LinkedIn workflows.",
          "Improve explainability by showing which resume and interview evidence influenced each score.",
          "Add recruiter analytics for screening throughput, candidate quality, and interview completion rates."
        ]
      }
    },
    {
      slug: "doctor-botx",
      name: "ClinIQ Assist",
      category: "Healthcare AI",
      description:
        "Source-grounded clinical knowledge, speech input, and safety-aware summaries come together for clinician support workflows.",
      impact: "Organizes retrieval, safety boundaries, and clinician review into a clearer medical decision-support workflow.",
      image: "/images/doctor-botx-ui.png",
      features: ["Clinical RAG", "Speech Input", "Source Grounding", "Safety Boundaries"],
      tech: ["LangGraph", "Qdrant", "Whisper", "RAG"],
      caseStudy: {
        clientType: "Healthcare founders, clinical workflow teams, and medical AI products",
        timeline: "Architecture, prototype, and safety-focused implementation planning",
        role: "AI systems architect and RAG workflow engineer",
        team: "Collaborated around clinical knowledge access, product flow, and technical feasibility",
        status: "Featured portfolio case study",
        overview:
          "ClinIQ Assist was designed as a clinical assistant that helps healthcare professionals access structured medical knowledge through retrieval-augmented conversation, speech input, and workflow-aware summaries. The goal was to support faster information access while keeping safety, transparency, and professional review at the center.",
        challenge:
          "Healthcare AI systems must be useful without overstating certainty. The challenge was to design a conversational assistant that retrieves relevant knowledge, makes uncertainty visible, and supports clinician workflows without presenting itself as an autonomous diagnostic authority.",
        goals: [
          "Use retrieval workflows to ground responses in controlled medical knowledge sources.",
          "Support speech-to-text interaction for faster clinical note or question capture.",
          "Design responses with clear caveats, source context, and escalation language.",
          "Build a modular architecture that can support future EHR or knowledge-base integrations."
        ],
        constraints: [
          "The assistant needed strong safety framing and no unsupported medical claims.",
          "Healthcare data flows require privacy-aware architecture and strict access controls.",
          "Responses needed to be traceable to retrieved context wherever possible.",
          "The system had to support domain review and prompt/evaluation iteration."
        ],
        responsibilities: [
          "Designed the retrieval and conversational workflow for clinical knowledge support.",
          "Planned vector search, document chunking, and source-aware response generation.",
          "Defined safety rules for uncertainty, escalation, and human clinical judgment.",
          "Mapped the prototype path from assistant interaction to future clinical integrations."
        ],
        architecture: [
          "Speech layer captures voice input and converts it into structured text.",
          "Retrieval layer searches vetted medical knowledge sources using vector search.",
          "Reasoning layer organizes retrieved evidence into concise, clinician-readable answers.",
          "Safety layer applies uncertainty handling, scope limits, and escalation messaging.",
          "Interface layer supports chat, transcript review, and context visibility."
        ],
        process: [
          {
            title: "Clinical workflow mapping",
            description:
              "Identified moments where clinicians or care teams need quick access to structured knowledge, summaries, or guidance."
          },
          {
            title: "Retrieval architecture",
            description:
              "Designed a RAG workflow with source-aware retrieval so generated responses could stay grounded in supplied knowledge."
          },
          {
            title: "Safety and escalation design",
            description:
              "Defined response boundaries, uncertainty handling, and human-review language suitable for healthcare contexts."
          },
          {
            title: "Prototype planning",
            description:
              "Outlined the components needed for speech input, document ingestion, vector search, conversational memory, and evaluation."
          }
        ],
        decisions: [
          {
            title: "Retrieval before generation",
            description:
              "The assistant prioritizes retrieving relevant source context before composing a response, reducing unsupported answers."
          },
          {
            title: "Clear clinical boundaries",
            description:
              "The product is positioned as decision support and knowledge access, not an autonomous diagnosis system."
          },
          {
            title: "Evaluation-ready design",
            description:
              "The workflow supports future evaluation against clinician-reviewed questions, answer quality, and source faithfulness."
          }
        ],
        outcomes: [
          "Created a safety-aware architecture for a healthcare AI assistant.",
          "Improved the product direction by separating retrieval, speech, reasoning, and safety layers.",
          "Made the system easier to validate through source-grounded responses and clinician review.",
          "Prepared the product for future integrations with approved knowledge bases or clinical systems."
        ],
        deliverables: [
          "RAG architecture",
          "Healthcare assistant workflow",
          "Safety and escalation rules",
          "Speech interaction plan",
          "Evaluation framework outline"
        ],
        nextSteps: [
          "Run domain-expert review on a curated medical question set.",
          "Add source previews and citation quality checks in the interface.",
          "Prepare compliance review before handling sensitive patient data."
        ]
      }
    },
    {
      slug: "bokafy",
      name: "Bokafy",
      category: "Hospitality SaaS",
      description:
        "Conversational booking flows connect guest reservations, real-time availability, and staff table management.",
      impact: "Unifies web, chat, and voice bookings into one staff-friendly operational flow.",
      image: "/images/bokafy-ui.png",
      features: ["AI Booking", "Table Management", "Guest Channels", "Reservation Dashboard"],
      tech: ["React", "Node.js", "Pinecone", "Supabase"],
      caseStudy: {
        clientType: "Restaurants, hospitality operators, and SaaS founders",
        timeline: "SaaS workflow design, AI automation, and launch-ready architecture",
        role: "AI product architect and full-stack implementation partner",
        team: "Worked across product, operations, and technical delivery priorities",
        status: "Featured portfolio case study",
        overview:
          "Bokafy was designed as a hospitality operations platform that brings reservations, real-time table updates, and conversational booking flows into one system. The product helps restaurants reduce missed bookings, respond faster to guests, and manage operations from a single workflow.",
        challenge:
          "Hospitality teams often manage bookings across phone calls, websites, chat messages, and manual spreadsheets. The challenge was to create an AI-assisted booking workflow that improves speed and consistency without making the guest experience feel robotic.",
        goals: [
          "Unify web, chat, and voice booking requests into a single operational flow.",
          "Give staff real-time visibility into table availability and reservation changes.",
          "Use conversational AI to answer common questions and capture booking intent.",
          "Design a scalable SaaS foundation for multi-location hospitality operators."
        ],
        constraints: [
          "Reservation data changes quickly and must stay synchronized across channels.",
          "The guest experience needed to feel simple, polite, and brand-appropriate.",
          "Restaurant staff need fast interfaces that work during busy service periods.",
          "The platform needed a data model that could support future multi-tenant SaaS usage."
        ],
        responsibilities: [
          "Mapped guest booking journeys across web, chat, and voice channels.",
          "Designed the reservation data model and table-management workflow.",
          "Planned AI assistant behavior for FAQs, availability checks, and booking capture.",
          "Structured the platform for operational dashboards and future SaaS expansion."
        ],
        architecture: [
          "Guest channel layer captures booking requests from web, chat, and voice.",
          "AI assistant layer interprets intent, answers FAQs, and collects reservation details.",
          "Availability engine checks tables, time slots, guest counts, and operational rules.",
          "Operations dashboard lets staff confirm, update, and monitor bookings.",
          "Data layer supports customer records, reservations, tables, and future multi-location use."
        ],
        process: [
          {
            title: "Service journey mapping",
            description:
              "Mapped the guest and staff journey from initial booking intent to confirmation, modification, and arrival."
          },
          {
            title: "Operational data modeling",
            description:
              "Defined reservations, tables, time slots, party sizes, customer notes, and status changes as core entities."
          },
          {
            title: "Conversational flow design",
            description:
              "Designed assistant flows for availability checks, booking capture, common questions, and graceful handoff to staff."
          },
          {
            title: "SaaS readiness",
            description:
              "Structured the platform so it could grow into multi-location operations, analytics, and integrations."
          }
        ],
        decisions: [
          {
            title: "Operations-first dashboard",
            description:
              "The internal dashboard was prioritized so staff could trust and manage AI-captured bookings during real service."
          },
          {
            title: "Human handoff for exceptions",
            description:
              "The assistant handles common flows but routes complex or uncertain requests to staff review."
          },
          {
            title: "Unified booking source of truth",
            description:
              "All channels write into the same reservation model to avoid double bookings and fragmented customer records."
          }
        ],
        outcomes: [
          "Created a unified booking workflow across web, chat, and voice channels.",
          "Improved operational clarity by connecting guest requests to table availability and staff review.",
          "Reduced the product risk of fragmented booking data by defining one reservation source of truth.",
          "Prepared the platform for analytics, CRM, and multi-location SaaS features."
        ],
        deliverables: [
          "Reservation workflow architecture",
          "Conversational booking flows",
          "Operations dashboard structure",
          "Data model for tables and bookings",
          "SaaS expansion plan"
        ],
        nextSteps: [
          "Add POS and calendar integrations.",
          "Introduce booking analytics for no-shows, peak hours, and channel performance.",
          "Build role-based staff access for managers, hosts, and operators."
        ]
      }
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      organization: "Independent Consulting",
      period: "2018 - Present",
      description:
        "Architecting AI systems, LLM workflows, and product-ready automation for international clients."
    },
    {
      role: "AI and NLP Engineer",
      organization: "SkillSoft",
      period: "2021 - Present",
      description:
        "Creating enterprise AI learning pathways and practical training for modern ML and NLP adoption."
    },
    {
      role: "Assistant Professor",
      organization: "UET Taxila",
      period: "2012 - Present",
      description:
        "Teaching, mentoring, and publishing research in AI systems, intelligent computing, and applied machine learning."
    },
    {
      role: "AI Consultant",
      organization: "Bluell AB",
      period: "2024 - Present",
      description:
        "Designing intelligent monitoring and automation solutions combining devices, analytics, and LLM-driven insights."
    }
  ],
  approach: [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      description:
        "I collaborate to map out your goals, target audience, and key functionality so we can define the right site structure, flow, and content requirements."
    },
    {
      phase: "Phase 2",
      title: "Development & Progress Update",
      description:
        "Once the direction is clear, I move into implementation and share progress along the way so you always know what is being built and why."
    },
    {
      phase: "Phase 3",
      title: "Deployment & Launch",
      description:
        "I translate the approved design and functionality into a production-ready website and make sure launch and delivery are handled cleanly."
    }
  ],
  principles: [
    {
      title: "Client-First Approach",
      description:
        "I shape each project around your objectives, communicate clearly, and focus on outcomes that create real value."
    },
    {
      title: "Modern Tech Stack",
      description:
        "I work with current AI and engineering tools so the systems I build are practical, scalable, and maintainable."
    },
    {
      title: "AI-Powered Solutions",
      description:
        "I design intelligent workflows, retrieval systems, and agentic automation that improve speed, quality, and decision-making."
    },
    {
      title: "Global Flexibility",
      description:
        "I collaborate remotely across time zones with a process that stays responsive without sacrificing delivery quality."
    },
    {
      title: "Ready to Collaborate",
      description:
        "Fast onboarding, clear milestones, and a partnership mindset make it easier to move from idea to execution."
    }
  ],
  publications: [
    {
      slug: "iwo-iga-hybrid-whale-optimization-for-2d-noc",
      title: "IWO-IGA—A Hybrid Whale Optimization Algorithm Featuring Improved Genetic Characteristics for Mapping Real-Time Applications onto 2D Network on Chip",
      authors: "Sharoon Saleem, Fawad Hussain, Naveed Khan Baloch",
      venue: "Algorithms, 17(3), 115",
      journalName: "Algorithms",
      impactFactor: "2.1",
      impactFactorSourceUrl: "https://www.mdpi.com/journal/algorithms/news-and-conferences/news/12303",
      year: 2024,
      doi: "10.3390/a17030115",
      publicationUrl: "https://www.mdpi.com/1999-4893/17/3/115",
      abstract:
        "This research proposes a hybrid whale-optimization and genetic approach for mapping real-time applications onto 2D NoC, showing improvements in power, energy, latency, and convergence behavior.",
      keywords: ["Whale Optimization", "Genetic Algorithm", "2D-NoC", "Real-Time Mapping"],
      citationCount: 9,
      citationSourceLabel: "9 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:3fE2CSJIrl8C"
    },
    {
      slug: "efficient-application-mapping-grey-wolf-optimization",
      title: "Efficient Application Mapping Approach Based on Grey Wolf Optimization for Network on Chip",
      authors: "Waqar Amin, Fawad Hussain, Sheraz Anjum, Sharoon Saleem, Naveed Khan Baloch, Yousaf Bin Zikria, Heejung Yu",
      venue: "Journal of Network and Computer Applications, 219, 103729",
      journalName: "Journal of Network and Computer Applications",
      impactFactor: "8.0",
      impactFactorSourceUrl: "https://www.sciencedirect.com/journal/journal-of-network-and-computer-applications/about/insights",
      year: 2023,
      doi: "10.1016/j.jnca.2023.103729",
      publicationUrl: "https://www.sciencedirect.com/science/article/pii/S1084804523001480",
      abstract:
        "This paper presents a grey-wolf-optimization-based application mapping approach for network-on-chip systems, combining clustering and polynomial-regression-assisted heuristics to reduce communication cost, energy use, and computation time.",
      keywords: ["Grey Wolf Optimization", "Network-on-Chip", "Application Mapping", "Polynomial Regression"],
      citationCount: 15,
      citationSourceLabel: "15 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:d1gkVwhDpl0C"
    },
    {
      slug: "feature-selection-speech-emotion-recognition-dcnn",
      title: "Impact of Feature Selection Algorithm on Speech Emotion Recognition Using Deep Convolutional Neural Network",
      authors: "Misbah Farooq, Fawad Hussain, Naveed Khan Baloch, Fawad Riasat Raja, Heejung Yu, Yousaf Bin Zikria",
      venue: "Sensors, 20(21), 6008",
      journalName: "Sensors",
      impactFactor: "3.5",
      impactFactorSourceUrl: "https://www.mdpi.com/about/announcements/12201",
      year: 2020,
      doi: "10.3390/s20216008",
      publicationUrl: "https://www.mdpi.com/1424-8220/20/21/6008",
      abstract:
        "This paper studies how feature-selection methods affect speech emotion recognition using a deep convolutional neural network, showing that careful acoustic feature selection can improve recognition accuracy and computational efficiency.",
      keywords: ["Speech Emotion Recognition", "Feature Selection", "Deep Convolutional Neural Network", "Acoustic Features"],
      citationCount: 168,
      citationSourceLabel: "168 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:u5HHmVD_uO8C"
    },
    {
      slug: "review-of-swarm-robotics-in-a-nutshell",
      title: "A Review of Swarm Robotics in a NutShell",
      authors: "Muhammad Muzamal Shahzad, Zubair Saeed, Asima Akhtar, Hammad Munawar, Muhammad Haroon Yousaf, Naveed Khan Baloch, Fawad Hussain",
      venue: "Drones, 7(4), 269",
      journalName: "Drones",
      impactFactor: "4.8",
      impactFactorSourceUrl: "https://www.mdpi.com/journal/drones/announcements/12262",
      year: 2023,
      doi: "10.3390/drones7040269",
      publicationUrl: "https://www.mdpi.com/2504-446X/7/4/269",
      abstract:
        "This review surveys the foundations, behaviors, algorithms, applications, and future directions of swarm robotics, highlighting the gap between simulation-driven research and real-world hardware deployment.",
      keywords: ["Swarm Robotics", "Swarm Intelligence", "Multi-Robot Systems", "Review"],
      citationCount: 83,
      citationSourceLabel: "83 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:zYLM7Y9cAGgC"
    },
    {
      slug: "ann-based-cardiovascular-disease-prediction-spectral-features",
      title: "Artificial Neural Network-Based Cardiovascular Disease Prediction Using Spectral Features",
      authors: "Misha Urooj Khan, Sana Samer, Hareem Khan, Naveed Khan Baloch, Fawad Hussain, Sung Won Kim, Yousaf Bin Zikria, Mohammad Dahman Alshehri",
      venue: "Computers & Electrical Engineering, 101, 108094",
      journalName: "Computers & Electrical Engineering",
      impactFactor: "4.9",
      impactFactorSourceUrl: "https://www.sciencedirect.com/journal/computers-and-electrical-engineering/about/insights",
      year: 2022,
      doi: "10.1016/j.compeleceng.2022.108094",
      publicationUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0045790622003494",
      abstract:
        "This paper presents an artificial-neural-network-based approach for cardiovascular disease prediction from phonocardiogram signals using selected spectral features, targeting accurate and low-cost clinical screening.",
      keywords: ["Cardiovascular Disease", "Artificial Neural Network", "Spectral Features", "Phonocardiogram"],
      citationCount: 55,
      citationSourceLabel: "55 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:9yKSN-GCB0IC"
    },
    {
      slug: "andean-condor-application-mapping-noc",
      title: "An Efficient and Cost Effective Application Mapping for Network-on-Chip Using Andean Condor Algorithm",
      authors: "Farrukh Mehmood, Naveed Khan Baloch, Fawad Hussain, Waqar Amin, M. Shamim Hossain, Yousaf Bin Zikria, Heejung Yu",
      venue: "Journal of Network and Computer Applications, 192, 103183",
      journalName: "Journal of Network and Computer Applications",
      impactFactor: "8.0",
      impactFactorSourceUrl: "https://www.sciencedirect.com/journal/journal-of-network-and-computer-applications/about/insights",
      year: 2022,
      doi: "10.1016/j.jnca.2021.103183",
      publicationUrl: "https://www.sciencedirect.com/science/article/pii/S1084804521003052",
      abstract:
        "This paper proposes an Andean condor algorithm for application mapping in network-on-chip systems, aiming to reduce communication cost and improve energy-efficient placement for real-time workloads.",
      keywords: ["Network-on-Chip", "Application Mapping", "Andean Condor Algorithm", "Optimization"],
      citationCount: 23,
      citationSourceLabel: "23 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:2osOgNQ5qMEC"
    },
    {
      slug: "cuckoo-search-levy-flight-noc",
      title: "Application Mapping Using Cuckoo Search Optimization with Levy Flight for NoC-Based System",
      authors: "Muhammad Junaid Mohiz, Naveed Khan Baloch, Fawad Hussain, Sharoon Saleem, Yousaf Bin Zikria, Heejung Yu",
      venue: "IEEE Access, 9, 141778-141789",
      journalName: "IEEE Access",
      impactFactor: "3.6",
      impactFactorSourceUrl: "https://ieeeaccess.ieee.org/about/bibliometrics/",
      year: 2021,
      doi: "10.1109/ACCESS.2021.3120079",
      publicationUrl: "https://ieeexplore.ieee.org/document/9570345",
      abstract:
        "This paper proposes a cuckoo-search optimization approach with Levy flight for task mapping in NoC-based systems, improving communication cost, energy consumption, and average packet latency through a hybrid greedy and metaheuristic placement strategy.",
      keywords: ["Cuckoo Search", "Levy Flight", "Network-on-Chip", "Application Mapping"],
      citationCount: 30,
      citationSourceLabel: "30 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:eQOLeE2rZwMC"
    },
    {
      slug: "defender-fault-tolerant-on-chip-router",
      title: "Defender: A Low Overhead and Efficient Fault-Tolerant Mechanism for Reliable On-Chip Router",
      authors: "Naveed Khan Baloch, Muhammad Iram Baig, Masoud Daneshtalab",
      venue: "IEEE Access, 7, 142843-142854",
      journalName: "IEEE Access",
      impactFactor: "3.6",
      impactFactorSourceUrl: "https://ieeeaccess.ieee.org/about/bibliometrics/",
      year: 2019,
      doi: "10.1109/ACCESS.2019.2944308",
      publicationUrl: "https://ieeexplore.ieee.org/document/8852631",
      abstract:
        "This paper introduces Defender, a low-overhead fault-tolerant router mechanism for network-on-chip systems, designed to tolerate permanent faults across router components while preserving communication reliability.",
      keywords: ["Fault Tolerance", "Network-on-Chip", "Router Architecture", "IEEE Access"],
      citationCount: 11,
      citationSourceLabel: "11 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:YOwf2qJgpHMC"
    },
    {
      slug: "fault-tolerant-noc-router-heterogeneous-computing-iot",
      title: "Fault-Tolerant Network-On-Chip Router Architecture Design for Heterogeneous Computing Systems in the Context of Internet of Things",
      authors: "Muhammad Rashid, Naveed Khan Baloch, Muhammad Akmal Shafique, Fawad Hussain, Shahroon Saleem, Yousaf Bin Zikria, Heejung Yu",
      venue: "Sensors, 20(18), 5355",
      journalName: "Sensors",
      impactFactor: "3.5",
      impactFactorSourceUrl: "https://www.mdpi.com/about/announcements/12201",
      year: 2020,
      doi: "10.3390/s20185355",
      publicationUrl: "https://www.mdpi.com/1424-8220/20/18/5355",
      abstract:
        "This paper presents a fault-tolerant router architecture for network-on-chip systems in heterogeneous computing environments, focusing on permanent-fault tolerance to improve reliability and maintain performance in IoT-oriented architectures.",
      keywords: ["Fault Tolerance", "Network-on-Chip", "Heterogeneous Computing", "Internet of Things"],
      citationCount: 21,
      citationSourceLabel: "21 citations (Google Scholar citation page provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=iHF3OyUAAAAJ&sortby=pubdate&citation_for_view=iHF3OyUAAAAJ:u-x6o8ySG0sC"
    },
    {
      slug: "mispronunciation-detection-arabic-dcnn-features",
      title: "Improving Mispronunciation Detection of Arabic Words for Non-Native Learners Using Deep Convolutional Neural Network Features",
      authors: "Shamila Akhtar, Fawad Hussain, Fawad Riasat Raja, Muhammad Ehatisham-ul-haq, Naveed Khan Baloch, Farruh Ishmanov, Yousaf Bin Zikria",
      venue: "Electronics, 9(6), 963",
      journalName: "Electronics",
      impactFactor: "2.6",
      impactFactorSourceUrl: "https://www.mdpi.com/journal/electronics/stats",
      year: 2020,
      doi: "10.3390/electronics9060963",
      publicationUrl: "https://www.mdpi.com/2079-9292/9/6/963",
      abstract:
        "This paper improves mispronunciation detection for Arabic words spoken by non-native learners using deep convolutional neural network features, showing stronger performance than handcrafted and transfer-learning baselines.",
      keywords: ["Mispronunciation Detection", "Arabic Words", "Deep Convolutional Neural Network", "Computer-Aided Language Learning"],
      citationCount: 54,
      citationSourceLabel: "54 citations (Google Scholar citation count provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?hl=en&user=iHF3OyUAAAAJ"
    },
    {
      slug: "noise-robustness-speech-command-recognition",
      title: "Incorporating Noise Robustness in Speech Command Recognition by Noise Augmentation of Training Data",
      authors: "Ayesha Pervaiz, Fawad Hussain, Huma Israr, Muhammad Ali Tahir, Fawad Riasat Raja, Naveed Khan Baloch, Farruh Ishmanov, Yousaf Bin Zikria",
      venue: "Sensors, 20(8), 2326",
      journalName: "Sensors",
      impactFactor: "3.5",
      impactFactorSourceUrl: "https://www.mdpi.com/about/announcements/12201",
      year: 2020,
      doi: "10.3390/s20082326",
      publicationUrl: "https://www.mdpi.com/1424-8220/20/8/2326",
      abstract:
        "This paper improves speech command recognition under noisy conditions by augmenting training data with noise, demonstrating stronger robustness and lower error rates across clean, noisy, and locally collected speech datasets.",
      keywords: ["Speech Command Recognition", "Noise Augmentation", "Automatic Speech Recognition", "Deep Learning"],
      citationCount: 81,
      citationSourceLabel: "81 citations (Google Scholar citation count provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?hl=en&user=iHF3OyUAAAAJ"
    },
    {
      slug: "performance-evaluation-application-mapping-noc",
      title: "Performance Evaluation of Application Mapping Approaches for Network-on-Chip Designs",
      authors: "Waqar Amin, Fawad Hussain, Sheraz Anjum, Sarzamin Khan, Naveed Khan Baloch, Zulqar Nain, Sung Won Kim",
      venue: "IEEE Access, 8, 63607-63631",
      journalName: "IEEE Access",
      impactFactor: "3.6",
      impactFactorSourceUrl: "https://ieeeaccess.ieee.org/about/bibliometrics/",
      year: 2020,
      doi: "10.1109/ACCESS.2020.2982675",
      publicationUrl: "https://doi.org/10.1109/ACCESS.2020.2982675",
      abstract:
        "This paper presents a comparative analysis of application mapping approaches for network-on-chip designs, categorizing current techniques and evaluating their effects on communication cost, power, energy consumption, and latency for real applications such as VOPD and MPEG4.",
      keywords: ["Network-on-Chip", "Application Mapping", "IEEE Access", "Performance Evaluation"],
      citationCount: 74,
      citationSourceLabel: "74 citations (Google Scholar citation count provided by user)",
      citationSourceUrl: "https://scholar.google.com/citations?hl=en&user=iHF3OyUAAAAJ"
    }
  ],
  testimonials: [
    {
      quote:
        "Great research scientist and very easy to work with.",
      author: "Client Feedback",
      role: "Research Collaboration"
    },
    {
      quote:
        "Delivered exactly what we needed and communicated clearly throughout the project. Very reliable and thoughtful in his approach.",
      author: "Client Feedback",
      role: "AI Product Client"
    },
    {
      quote:
        "Strong technical depth, quick to understand requirements, and professional from start to finish. I would gladly work with him again.",
      author: "Client Feedback",
      role: "International Client"
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/naveed-khan-baloch-1954518/",
    github: "https://github.com/NaveedKhanBaloch",
    scholar: "https://scholar.google.com/citations?hl=en&user=iHF3OyUAAAAJ",
    upwork: "https://www.upwork.com/freelancers/~01c766a0a5b535c55f"
  },
  contact: {
    email: "naveedk09@gmail.com",
    phone: "+92 333 555 0000",
    calendarHref: "https://calendly.com/naveedk09/30min",
    cvHref: "/data/NaveedCV.pdf"
  }
};
