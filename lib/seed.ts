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
      slug: "recrubotx",
      name: "RecrubotX",
      category: "Hiring Intelligence",
      description:
        "An end-to-end agentic hiring platform for resume parsing, scheduling, voice interviews, and structured candidate evaluation.",
      impact: "Reduced recruiter workload with automated screening and interview workflows.",
      image: "/images/interviewAI.webp",
      tech: ["OpenAI", "LangChain", "Python", "Voice AI"]
    },
    {
      slug: "doctor-botx",
      name: "Doctor BotX",
      category: "Healthcare AI",
      description:
        "A clinical assistant powered by retrieval workflows, speech integration, and conversational decision support.",
      impact: "Improved access to structured medical knowledge during clinician workflows.",
      image: "/images/doctorbotx.webp",
      tech: ["LangGraph", "Qdrant", "Whisper", "RAG"]
    },
    {
      slug: "bokafy",
      name: "Bokafy",
      category: "Hospitality SaaS",
      description:
        "A booking and operations platform using conversational AI for reservations, real-time updates, and smart table management.",
      impact: "Unified web, chat, and voice bookings into one operational flow.",
      image: "/images/bokafy.webp",
      tech: ["React", "Node.js", "Pinecone", "Supabase"]
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
