/**
 * Single source of truth for portfolio content.
 * Sourced from CV: IGD Raditya Wibhawa MN — Backend Developer.
 */

export const profile = {
  name: "IGD Raditya Wibhawa MN",
  shortName: "Raditya Wibhawa",
  role: "Backend Developer",
  location: "Bandung, Indonesia",
  email: "radityawibhawa13@gmail.com",
  phone: "+62 821 9495 2576",
  linkedin: "https://linkedin.com/in/radityawibhawa",
  tagline:
    "Backend Developer architecting scalable, enterprise-level applications with Java, Node.js, and Python.",
  summary:
    "Results-driven Backend Developer with proven expertise in architecting scalable, enterprise-level applications using Java (Spring Boot, Quarkus), Node.js (NestJS), and Python (Flask). Skilled in designing RESTful APIs, implementing microservices architecture, and optimizing database performance to deliver robust and efficient backend solutions.",
};

export const stats: { value: string; label: string }[] = [
  { value: "20+", label: "Backend services shipped" },
  { value: "50+", label: "RESTful APIs designed" },
  { value: "65%", label: "API performance gain" },
  { value: "2+", label: "Years of experience" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Mandiri Inhealth",
    role: "Java Software Engineer",
    period: "Feb 2026 — Present",
    current: true,
    bullets: [
      "Designed and implemented 15+ RESTful API endpoints for claim processing workflows including admission, daily monitoring, discharge, cancellation, and status updates for both inpatient and outpatient services.",
      "Built complex business logic for claim status mapping and routing based on approval status codes with automated workflow orchestration.",
      "Created 2 scheduled jobs using Quartz Scheduler for automated claim processing and document upload synchronization with configurable intervals — reducing manual intervention by 100%.",
      "Built admission and periodic claim data enrichers to process healthcare claims with proper data type conversions and validation logic.",
      "Implemented robust error handling for missing or invalid data scenarios in claim processing workflows, ensuring data integrity across admission and billing operations.",
    ],
  },
  {
    company: "Padepokan 79",
    role: "Backend Developer",
    period: "Oct 2023 — Jan 2026",
    bullets: [
      "Developed and maintained 20+ scalable backend services and microservices using Java (Spring Boot, Quarkus) and Node.js (NestJS, Express.js).",
      "Engineered and documented 50+ RESTful APIs to ensure seamless and secure communication between frontend and backend systems.",
      "Utilized SQL and NoSQL databases (PostgreSQL, SQL Server, Redis) for efficient data storage, retrieval, and caching — improving API performance up to 65%.",
      "Managed CI/CD pipelines (Jenkins), monitored application health and logs on container platforms like OpenShift, and integrated message brokers (ActiveMQ) to support asynchronous operations.",
    ],
  },
  {
    company: "Jabar Digital Service (Padepokan 79 Vendor)",
    role: "Backend Developer",
    period: "Oct 2025 — Jan 2026",
    bullets: [
      "Built RESTful APIs for Generator Management System using Flask with MVC architecture. Developed 20+ endpoints with standardized response handling and Swagger documentation, delivered within a 3-month timeline.",
      "Implemented JWT authentication with role-based access control (RBAC) for 4 user roles. Integrated bcrypt password hashing and Redis session management — reducing session management overhead by 60% versus database-based sessions.",
      "Designed PostgreSQL database schema with SQLAlchemy ORM. Created 13+ data models with soft delete patterns, audit trails, and relational integrity, managing 100+ generator records across West Java.",
      "Containerized application using Docker. Implemented system health monitoring and logging infrastructure for production deployment.",
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  period: string;
  description: string;
  stack: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    name: "Generator & Solar Power Plant Mapping Dashboard",
    org: "West Java / Jabar Digital Service",
    period: "Oct 2025 — Jan 2026",
    description:
      "Web application to map generators and solar power plants across West Java. Features a dashboard for visual data analysis and an admin side for data handling.",
    stack: ["Python 3.11", "Flask", "PostgreSQL", "Redis", "Docker"],
  },
  {
    name: "SIAP Jasindo — Agriculture Insurance Information System",
    org: "Internal Project at Tujuh Sembilan",
    period: "Sep 2025 — Oct 2025",
    description:
      "Digitalizes administrative activity supporting agricultural insurance for rice farming. Enables farmers and field officers to register, monitor policies, submit claims, and access e-policies through a paperless system.",
    stack: ["Java 21", "Quarkus", "MySQL", "JasperReport", "GitLab"],
    highlights: [
      "Built backend & RESTful APIs for farmer and field officer workflows",
      "Optimized services with Java 21 + Quarkus for scalability and performance",
    ],
  },
  {
    name: "FEMA — FIF Employee Management Application",
    org: "Internal Project at Tujuh Sembilan",
    period: "Feb 2025 — Oct 2025",
    description:
      "Mobile-based application centralizing and streamlining employee service management via a reliable microservices backend.",
    stack: ["Java 11", "Spring Boot", "PostgreSQL", "Redis", "ActiveMQ", "Microservices"],
    highlights: [
      "Designed RESTful APIs for seamless mobile integration",
      "Integrated ActiveMQ for asynchronous microservice communication",
    ],
  },
  {
    name: "EngageOne — 1-on-1 Meeting Booking App",
    org: "Internal Project at Tujuh Sembilan",
    period: "Jan 2025 — Feb 2025",
    description:
      "Web application enhancing 1-on-1 booking between Human Capital and talents, streamlining scheduling and communication.",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Swagger", "GitLab"],
  },
  {
    name: "Loan Origination System",
    org: "Internal Project at Tujuh Sembilan",
    period: "Jan 2024 — Jan 2025",
    description:
      "Streamlines the loan application process — users submit data forms processed through stages by different internal roles.",
    stack: ["Java 21", "Spring Boot", "SQL Server", "MinIO", "JWT", "GitLab"],
    highlights: [
      "JWT-based authentication and authorization",
      "MinIO integration for cloud file storage",
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Quarkus",
      "Node.js",
      "NestJS",
      "Express.js",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Methods",
    items: [
      "Git",
      "Docker",
      "Jenkins",
      "ActiveMQ",
      "Kafka",
      "Microservices",
      "OpenShift",
      "Swagger",
    ],
  },
  {
    title: "Soft Skills",
    items: ["Collaboration", "Communication", "Teamwork", "Curiosity", "Adaptable"],
  },
];

export const education = {
  degree: "Bachelor of Informatics",
  school: "Telkom University",
  period: "2018 — 2022",
  gpa: "3.25 / 4.00",
};

export const certifications: string[] = [
  "Oracle Foundation Associate Database Certification",
  "BNSP Certified Senior Programmer",
];

export const courses: string[] = [
  "IBM Data Analytics with R and Excel",
  "DeepLearning.AI TensorFlow Developer",
  "IBM AI Engineering",
];

export type PersonalProject = {
  name: string;
  codename?: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  download: {
    href: string;
    fileName: string;
    label: string;
    sizeLabel: string;
    platform: string;
  };
};

export const personalProject: PersonalProject = {
  name: "SmartShape",
  codename: "docqa",
  tagline:
    "A privacy-first desktop app I built so I can finally ask my own folder of documents real questions — and get answers I can actually trust.",
  description:
    "SmartShape lives on your machine. Point it at a folder of PDFs, Word docs, Markdown, or plain text, and it quietly indexes everything in the background. From there you can chat with your library, jump straight to the exact paragraph an answer came from, and keep working without anything ever leaving your computer. It runs fully offline with Ollama, or with your own API key if you'd rather use a hosted model — your key stays in the OS keychain, not in some cloud database.",
  features: [
    "Ask questions and get answers with click-able citations that take you back to the source paragraph",
    "Knowledge Graph in 3D to see how your documents and ideas connect",
    "Turn any document into a slide deck or a podcast-style audio summary",
    "Drop a file in your folder and SmartShape picks it up automatically — no re-indexing button to press",
    "Fully offline mode with Ollama, or bring your own API key if you prefer",
  ],
  stack: ["Tauri v2", "Rust", "React", "TypeScript", "Ollama", "OS Keychain"],
  download: {
    href: "/downloads/SmartShape_0.1.0_x64_en-US.msi",
    fileName: "SmartShape_0.1.0_x64_en-US.msi",
    label: "Download SmartShape",
    sizeLabel: "11 MB",
    platform: "Windows · x64 · v0.1.0",
  },
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "personal", label: "Personal" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
