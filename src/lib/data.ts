// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// Every word and link on the site is defined here. To update your portfolio,
// edit this file only — the components render whatever they find below.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Vipusa Sriharan",
  role: "Software Engineering Undergraduate",
  affiliation: "University of Kelaniya",
  tagline:
    "Backend-leaning software engineer building REST APIs, mobile apps, and systems that hold up under real use.",
  location: "Sri Lanka",
  email: "vipusrihar@gmail.com",
  resumeUrl: "/Vipusa_CV.pdf",
  avatarUrl: "/images/profile.jpeg",
  social: [
    { label: "GitHub", href: "https://www.github.com/vipusrihar", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vipusa-sriharan", icon: "linkedin" },
    { label: "Medium", href: "https://www.medium.com/@vipusrihar", icon: "medium" },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/vipusrihar", icon: "hackerrank" },
  ],
} as const;

// Each top-level section is framed as an API route — home is the index,
// contact is the only mutation (POST). This mirrors how the projects
// below are actually built.
export const routes = [
  { method: "GET", path: "/", label: "Home", id: "home" },
  { method: "GET", path: "/about", label: "About", id: "about" },
  { method: "GET", path: "/education", label: "Education", id: "education" },
  { method: "GET", path: "/skills", label: "Skills", id: "skills" },
  { method: "GET", path: "/projects", label: "Projects", id: "projects" },
  { method: "POST", path: "/contact", label: "Contact", id: "contact" },
] as const;

export const about = {
  heading: "Software Engineering Undergraduate",
  paragraphs: [
    "I'm a third-year Software Engineering undergraduate at the University of Kelaniya, most interested in what happens behind the response — auth, data modelling, and the services that keep an app honest under load.",
    "Day to day that means Spring Boot and REST APIs on the backend, and React or React Native when the problem needs a face. I like projects that force a real decision: how to model the data, where to put the validation, what happens when a request fails.",
    "Lately I've been going deeper on cross-platform mobile with React Native, and I'm always open to building something with other people — a project, a challenge, a good idea that needs a second engineer.",
  ],
} as const;

export type TimelineItem = {
  title: string;
  period: string;
  org: string;
  details: string[];
};

export const education: TimelineItem[] = [
  {
    title: "B.Sc (Hons) in Software Engineering",
    period: "2023 — present",
    org: "University of Kelaniya",
    details: ["Current GPA: 3.63"],
  },
  {
    title: "GCE Advanced Level",
    period: "2021",
    org: "J/Manipay Ladies College",
    details: ["Combined Maths — B", "Chemistry — B", "Physics — B", "Z-Score — 1.6626"],
  },
  {
    title: "GCE Ordinary Level",
    period: "2018",
    org: "J/Manipay Ladies College",
    details: ["Results: 9A"],
  },
];

export const certificates: TimelineItem[] = [
  {
    title: "C — Intermediate",
    period: "",
    org: "Sololearn",
    details: ["Credential ID: CC-EIKQ52HP"],
  },
  {
    title: "Java — Intermediate",
    period: "",
    org: "Sololearn",
    details: ["Credential ID: CC-M9YKYREB"],
  },
  {
    title: "SQL — Intermediate",
    period: "",
    org: "HackerRank",
    details: ["Credential ID: 30489a198c77"],
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

// Grouped like a schema: each category is a table, each skill a column.
export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Java", "TypeScript", "JavaScript", "Kotlin", "C"] },
  { label: "Backend", skills: ["Spring Boot", "REST APIs", "JWT Auth", "PHP", "MySQL"] },
  { label: "Frontend & Mobile", skills: ["React", "React Native", "Vite", "Bootstrap"] },
  { label: "Tooling", skills: ["Git", "GitHub", "Postman", "XAMPP"] },
];

export type Project = {
  name: string;
  status: "200 OK" | "201 Created" | "Archived";
  method: "GET" | "POST" | "PUT";
  endpoint: string;
  summary: string;
  stack: string[];
  image: string;
  imageAlt: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    name: "Fuel Quota Management System",
    status: "200 OK",
    method: "GET",
    endpoint: "/api/fuel-quota",
    summary:
      "A full-stack web and mobile solution for managing fuel distribution: role-based auth, quota tracking, and a mobile app for station-side lookups.",
    stack: ["Spring Boot", "REST API", "MySQL", "JWT", "React", "Vite", "React Native (Expo)"],
    image: "/images/projects/fuel-quota-system.png",
    imageAlt: "Fuel Quota Management System dashboard",
    repoUrl: "https://github.com/vipusrihar/fuel-quota-management-system",
  },
  {
    name: "QuickBites — Food Ordering Backend",
    status: "200 OK",
    method: "GET",
    endpoint: "/api/orders",
    summary:
      "The backend for a food ordering platform: authentication, order and menu persistence, and RESTful services designed to be consumed by a separate frontend.",
    stack: ["Spring Boot", "REST API", "MySQL", "JWT"],
    image: "/images/projects/backend.png",
    imageAlt: "QuickBites backend architecture",
    repoUrl: "https://github.com/vipusrihar/QuickBites",
  },
  {
    name: "To-Do-List Mobile App",
    status: "201 Created",
    method: "POST",
    endpoint: "/api/tasks",
    summary:
      "A daily task manager with a clean, focused UI. Add, edit, complete, and share tasks, with state persisted locally so nothing is lost between sessions.",
    stack: ["React Native CLI", "TypeScript", "Zustand", "AsyncStorage"],
    image: "/images/projects/to-do-list.jpeg",
    imageAlt: "To-Do-List mobile app screens",
    repoUrl: "https://github.com/vipusrihar/Habit_Tracker",
  },
  {
    name: "Habit Tracker Mobile App",
    status: "201 Created",
    method: "POST",
    endpoint: "/api/habits",
    summary:
      "Tracks daily habits with both boolean (done/not-done) and count-based tracking, with accounts so progress survives a reinstall.",
    stack: ["React Native CLI", "TypeScript", "AsyncStorage"],
    image: "/images/projects/habit-tracker.jpeg",
    imageAlt: "Habit Tracker mobile app screens",
    repoUrl: "https://github.com/vipusrihar/Habit_Tracker",
  },
  {
    name: "Simple Course-Staff Updater",
    status: "200 OK",
    method: "GET",
    endpoint: "/admin/course-staff",
    summary:
      "A lightweight admin panel for keeping course and staff records up to date — built to be simple enough that anyone on staff could use it.",
    stack: ["PHP", "HTML", "CSS", "XAMPP"],
    image: "/images/projects/simple-course-staff.png",
    imageAlt: "Course Staff Updater admin panel",
    repoUrl: "https://github.com/vipusrihar/Simple-Course-Staff",
  },
];
