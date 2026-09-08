// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Every word, link, and stat on the site is defined here. To update the
// portfolio, edit this file — the components render whatever they find.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Vipusa Sriharan",
  headline: "Building Reliable Software,\nOne System at a Time.",
  roles: [
    "Software Developer Intern",
    "Backend Developer",
    "Cloud Enthusiast",
    "DevOps Learner",
  ],
  shortIntro:
    "Backend-focused software engineer with professional internship experience developing enterprise web applications using Spring Boot, React, and MySQL. Passionate about software architecture, scalable backend systems, cloud technologies, and solving real-world engineering problems.",
  education: "Fourth-Year Software Engineering Undergraduate",
  university: "University of Kelaniya",
  gpa: "3.7370",
  location: "Sri Lanka",
  email: "vipusrihar@gmail.com",
  resumeUrl: "/Vipusa_CV.pdf",
  avatarUrl: "/images/profile.jpeg",
  githubUsername: "vipusrihar",
  social: [
    { label: "GitHub", href: "https://www.github.com/vipusrihar", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vipusa-sriharan", icon: "linkedin" },
    { label: "Medium", href: "https://www.medium.com/@vipusrihar", icon: "medium" },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/vipusrihar", icon: "hackerrank" },
  ],
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  // { id: "achievements", label: "Achievements" },
  // { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { label: "Years Coding", value: 4, suffix: "+" },
  { label: "Projects Built", value: 7, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Internships", value: 1, suffix: "" },
] as const;

// ── About ───────────────────────────────────────────────────────────────

export const aboutCards = [
  {
    title: "Who I Am",
    body: "A fourth-year Software Engineering undergraduate at the University of Kelaniya, currently working as a Software Developer Intern. I care most about what happens behind the response - data modelling, auth, and the systems that keep an application honest under load.",
  },
  {
    title: "Journey",
    body: "Started with the fundamentals in 2023, moved into backend development with Spring Boot and REST APIs, branched into React Native for mobile, and am now applying all of it in a professional internship building enterprise web applications.",
  },
  {
    title: "Current Focus",
    body: "Backend architecture and cloud infrastructure - Spring Boot services, containerization with Docker, CI/CD pipelines, and a final-year research project applying machine learning to system performance.",
  },
  {
    title: "Career Goals",
    body: "To grow into a backend or platform engineering role where I can design systems that scale - with a long-term interest in distributed systems, cloud architecture, and engineering leadership.",
  },
] as const;

export type TimelineMilestone = {
  year: string;
  title: string;
};

export const aboutTimeline: TimelineMilestone[] = [
  { year: "2023", title: "Started Software Engineering" },
  { year: "2024", title: "FullStack Development" },
  { year: "2025", title: "Mobile Development · Software Developer Intern" },
  { year: "2026", title: "OneCare · ML Research" },
];

// ── Experience ──────────────────────────────────────────────────────────

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "CyberMasSolutions",
    period: "2025 Oct - Present",
    current: true,
    responsibilities: [
      "Develop full-stack HR and payroll management features",
      "Build and maintain REST APIs and backend business logic",
      "Develop React dashboards and data visualization components",
      "Design and optimize MySQL databases and complex SQL queries",
      "Implement payroll processing, EPF/ETF, leave, allowance, and deduction logic",
      "Optimize API performance using backend filtering and pagination",
      "Implement application logging and audit tracking with Winston",
      "Work with Docker, Docker Compose, and GitHub Actions",
      "Develop automated tests using Cypress and perform functional testing",
      "Collaborate in a remote Agile environment using Git"
    ],
    tech: ["Node", "React", "MySQL", "Docker", "GitHub", "JWT", "REST APIs"],
  },
];

// ── Education & Certificates ────────────────────────────────────────────

export type TimelineItem = {
  title: string;
  period: string;
  org: string;
  details: string[];
};

export const education: TimelineItem[] = [
  {
    title: "B.Sc (Hons) in Software Engineering",
    period: "2023 - present",
    org: "University of Kelaniya",
    details: ["Current GPA: 3.7370", "Fourth-year undergraduate"],
  },
  {
    title: "GCE Advanced Level",
    period: "2021",
    org: "J/Manipay Ladies College",
    details: ["Combined Maths - B", "Chemistry - B", "Physics - B", "Z-Score - 1.6626"],
  },
  {
    title: "GCE Ordinary Level",
    period: "2018",
    org: "J/Manipay Ladies College",
    details: ["Results: 9A"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  credentialId: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "C - Intermediate",
    issuer: "Sololearn",
    credentialId: "CC-EIKQ52HP",
    credentialUrl: "https://www.sololearn.com/certificates/CC-EIKQ52HP",
  },
  {
    title: "Java - Intermediate",
    issuer: "Sololearn",
    credentialId: "CC-M9YKYREB",
    credentialUrl: "https://www.sololearn.com/certificates/CC-M9YKYREB",
  },
  {
    title: "SQL - Intermediate",
    issuer: "HackerRank",
    credentialId: "30489a198c77",
    credentialUrl: "https://www.hackerrank.com/certificates/30489a198c77",
  },
];

// ── Skills ──────────────────────────────────────────────────────────────

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Java", "Python", "JavaScript", "TypeScript", "C"] },
  { label: "Backend", skills: ["Spring Boot", "Spring Security", "REST API", "JWT", "Hibernate", "JPA"] },
  { label: "Frontend", skills: ["React", "React Native", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Database", skills: ["MySQL", "MongoDB", "PostgreSQL"] },
  { label: "Cloud & DevOps", skills: ["Docker", "GitHub Actions"] },
  { label: "Testing", skills: ["JUnit", "Postman"] },
  { label: "Tools", skills: ["Git", "GitHub", "IntelliJ", "VS Code", "Figma"] },
];

// ── Projects ────────────────────────────────────────────────────────────
export type Project = {
  name: string;
  status: "Ongoing" | "Completed" | "Research Ongoing" | "Rebuilding";
  summary: string;
  features: string[];
  contribution?: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  repoUrl: string;
  hostedUrl?: string;
};

export const projects: Project[] = [
  {
    name: "OneCare Healthcare Management System",
    status: "Ongoing",
    summary:
      "Enterprise healthcare management platform supporting doctors, pharmacists, administrators, and patients.",
    features: [
      "JWT authentication",
      "Role-based access control",
      "Appointment management",
      "Electronic medical records",
      "Prescription management",
      "CI/CD pipeline with Docker",
    ],
    contribution: [
      "Backend development",
      "Infrastructure",
      "Authentication",
      "CI/CD pipeline",
    ],
    tech: [
      "Spring Boot",
      "React",
      "MySQL",
      "Docker",
      "GitHub Actions",
      "JWT",
      "REST API",
    ],
    image: "/images/projects/onecare.png",
    imageAlt: "OneCare Healthcare Management System",
    repoUrl: "https://github.com/OneCareSystems",
  },
  {
    name: "BookTown - Book E-Commerce Platform",
    status: "Ongoing",
    summary:
      "Full-stack book e-commerce platform with customer accounts, book discovery, shopping cart, order processing, and an administrative dashboard for managing books, users, orders, discounts, and sales.",
    features: [
      "Book browsing and filtering by name, author, and ISBN",
      "Book details and shopping cart",
      "JWT-based user authentication",
      "Complete order processing workflow",
      "Admin dashboard with book CRUD operations",
      "User and order management",
      "Discount management",
      "Basic sales analytics",
      "Cloudinary image upload integration",
    ],
    contribution: [
      "Full-stack web development",
      "REST API development",
      "Authentication and authorization",
      "E-commerce business logic",
      "Admin dashboard development",
      "Database design and integration",
      "State management with Redux Toolkit",
      "Image upload integration",
    ],
    tech: [
      "React",
      "Vite",
      "Redux Toolkit",
      "TailwindCSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Cloudinary",
    ],
    image: "/images/projects/booktown.png",
    imageAlt: "BookTown Book E-Commerce Platform",
    repoUrl: "https://github.com/vipusrihar/e-commerce-website",
  },
  {
    name: "Fuel Quota Management System",
    status: "Completed",
    summary:
      "A full-stack web and mobile solution for managing fuel distribution: role-based auth, quota tracking, and a mobile app for station-side lookups.",
    features: [
      "Role-based auth",
      "Quota tracking",
      "Mobile app for station lookups",
    ],
    tech: [
      "Spring Boot",
      "REST API",
      "MySQL",
      "JWT",
      "React",
      "Vite",
      "React Native (Expo)",
    ],
    image: "/images/projects/fuel-quota-system.png",
    imageAlt: "Fuel Quota Management System dashboard",
    repoUrl:
      "https://github.com/vipusrihar/fuel-quota-management-system",
  },
  {
    name: "Secure E-Commerce Web Application",
    status: "Completed",
    summary:
      "Secure e-commerce web application developed for an Information Security assessment, featuring authenticated shopping, order management, HTTPS communication, and protection against common web vulnerabilities.",
    features: [
      "Secure user authentication with Asgardeo OIDC",
      "Product browsing and order management",
      "User profile management",
      "CSRF and XSS protection",
      "Input validation and sanitization",
      "SQL injection prevention",
      "HTTPS-enabled frontend and backend",
      "Principle of least privilege",
    ],
    contribution: [
      "Backend development",
      "REST API development",
      "Security implementation",
      "OIDC authentication integration",
      "HTTPS configuration",
      "Frontend development",
      "Database integration",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "Vite",
      "TailwindCSS",
      "MUI",
      "MySQL",
      "Asgardeo",
      "OIDC",
      "HTTPS",
    ],
    image: "/images/projects/security.png",
    imageAlt: "Secure E-Commerce Web Application",
    repoUrl:
      "https://github.com/vipusrihar/Small_e-commerce_web_application",
  },
  {
    name: "FitTrack - Personal Wellness & Fitness Tracker",
    status: "Completed",
    summary:
      "A PWA-ready wellness tracking application with offline-first data storage, progress analytics, workout tracking, and personalized dashboards.",
    features: [
      "Calorie and hydration tracking",
      "Workout logging and timers",
      "Progress charts and analytics",
      "Achievement system",
      "Offline-first PWA",
      "IndexedDB data persistence",
      "JSON data export",
      "Dark and light themes",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Dexie.js",
      "IndexedDB",
      "Recharts",
      "Axios",
      "PWA",
    ],
    image: "/images/projects/fittrack.png",
    imageAlt: "FitTrack wellness and fitness tracker",
    repoUrl:
      "https://github.com/vipusrihar/Personal_Wellness-Fitness_Tracker",
    hostedUrl:
      "https://personal-wellness-fitness-tracker.vercel.app/",
  },

  {
    name: "Online Bus Booking System",
    status: "Rebuilding",
    summary:
      "Spring Boot REST API for searching buses, routes, and trips, with seat booking, cancellation, booking changes, and role-based management.",
    features: [
      "JWT authentication",
      "Bus, route, and trip management",
      "Seat booking and cancellation",
      "Booking modification",
      "Trip schedule validation",
      "Booking change audit logging",
      "Layered backend architecture",
    ],
    contribution: [
      "Backend development",
      "REST API design",
      "Database design",
      "Authentication and security",
      "Business logic implementation",
      "Architecture redesign",
      "Codebase analysis and refactoring",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "JWT",
      "Maven",
    ],
    image: "/images/projects/backend.png",
    imageAlt: "Online Bus Booking System",
    repoUrl:
      "https://github.com/vipusrihar/online_bus_booking_system",
  },

  {
    name: "Habit Tracker Mobile App",
    status: "Completed",
    summary:
      "Tracks daily habits with both boolean and count-based tracking, with local persistence for maintaining progress between sessions.",
    features: [
      "Boolean and count-based tracking",
      "Local data persistence",
      "Habit progress tracking",
    ],
    tech: ["React Native CLI", "TypeScript", "AsyncStorage"],
    image: "/images/projects/habit-tracker.jpeg",
    imageAlt: "Habit Tracker mobile app screens",
    repoUrl: "https://github.com/vipusrihar/Habit_Tracker",
  },

  {
    name: "To-Do-List Mobile App",
    status: "Completed",
    summary:
      "A focused mobile task manager for creating, editing, completing, and sharing daily tasks with persistent local state.",
    features: [
      "Add, edit, and complete tasks",
      "Task sharing",
      "Local persistence",
    ],
    tech: [
      "React Native CLI",
      "TypeScript",
      "Zustand",
      "AsyncStorage",
    ],
    image: "/images/projects/to-do-list.jpeg",
    imageAlt: "To-Do-List mobile app screens",
    repoUrl: "https://github.com/vipusrihar/Habit_Tracker",
  },

  {
    name: "Simple Course-Staff Updater",
    status: "Completed",
    summary:
      "A lightweight administration system for maintaining course and staff records through a simple web interface.",
    features: [
      "Course records management",
      "Staff records management",
    ],
    tech: ["PHP", "HTML", "CSS", "XAMPP"],
    image: "/images/projects/simple-course-staff.png",
    imageAlt: "Course Staff Updater admin panel",
    repoUrl:
      "https://github.com/vipusrihar/Simple-Course-Staff",
  },
];

// ── Research ────────────────────────────────────────────────────────────

export const research = {
  title: "Decision-Aware Machine Learning Framework",
  status: "Research Ongoing" as const,
  problem:
    "Web systems typically react to performance degradation after it happens. This research asks whether request latency can be predicted before execution, so a system can act proactively instead of reactively.",
  objectives: [
    "Predict request latency before execution using machine learning",
    "Proactively optimize web system performance under load",
    "Evaluate the approach against real traffic patterns",
  ],
  methodology:
    "Historical request and system-load data is used to train models that estimate expected latency for an incoming request. A Spring Boot service intercepts requests and queries a FastAPI-served model in real time, allowing routing or throttling decisions to be made before the request executes.",
  techStack: ["Node", "PostgresSQL", "Docker", "K6"],
  progress: "Data collection and initial model training complete; integration testing in progress.",
  publicationStatus: "Final-year research project - not yet submitted for publication.",
} as const;

// ── Achievements ────────────────────────────────────────────────────────

export type Achievement = {
  title: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "Software Developer Intern",
    description: "Selected for a professional internship developing enterprise web applications.",
  },
  {
    title: "Final-Year Research Project",
    description: "Leading a machine learning research project on predictive latency optimization.",
  },
  {
    title: "3 Technical Certifications",
    description: "Sololearn (C, Java) and HackerRank (SQL), all at Intermediate level.",
  },
];

// ── Contact / EmailJS ───────────────────────────────────────────────────

// EmailJS is client-side by design — these IDs are meant to be public
// (the account-level restriction happens in the EmailJS dashboard, not by
// hiding these values). Get them from https://www.emailjs.com after
// creating a service + template.
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};
