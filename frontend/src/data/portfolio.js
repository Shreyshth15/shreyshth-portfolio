export const PROFILE = {
  name: "Shreyshth Sharma",
  firstName: "Shreyshth",
  lastName: "Sharma",
  pronunciation: 'Pronounced "Shrey-sh-th Shar-ma" · Goes by Shrey',
  role: "Finance · Analytics · Investment Research",
  tagline: "Shrey Sharma · Finance · Analytics · Investment Research",
  greeting: "Hello, I'm",
  est: "2002",
  location: "Washington-Baltimore Area",
  timezone: "America/Indiana/Indianapolis",
  email: "shshar@iu.edu",
  emailAlt: "Shreshth2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreyshth-sharma-0170",
  linkedinLabel: "/in/shreyshth-sharma-0170",
  resumeUrl: "/Shreyshth-Sharma-CV.pdf",
  shortBio:
    "Economics & Quantitative Methods graduate from Indiana University Bloomington, with a minor in Psychology, focused on finance, asset management, analytics and investment research. I turn market information, data and business problems into clear, decision-ready analysis.",
  heroTags: ["Finance", "Analytics", "Investment Research", "Credit Research", "Fixed Income Research", "Macro & Rates Analysis", "Behavioral Economics"],
  built: ["Intel Site-Selection Models", "UBI Labor-Supply Simulation", "Investor Research Decks"],
  workedWith: ["Advanced Excel", "PowerPoint", "Tableau", "SQL", "Python", "R"],
  openTo: ["Asset Management", "Credit Research", "Structured Finance", "Portfolio & Performance Analytics", "Investment Research", "Consulting"],
};

export const PHOTOS = {
  portraitPrimary: "/images/iu-wylie.jpg",
  portraitSecondary: "/images/iu-wall.jpg",
  graduation: "/images/grad-stage.jpg",
};

export const ABOUT = {
  facts: [
    { label: "Based", value: "Washington-Baltimore Area" },
    { label: "Degree", value: "B.S. Economics & Quantitative Methods" },
    { label: "Status", value: "Open to work" },
    { label: "Relocation", value: "Open to relocation nationwide" },
  ],
  paragraphs: [
    "I'm an Economics & Quantitative Methods graduate from Indiana University Bloomington with a minor in Psychology, focused on finance, investment research, credit, and analytics.",
    "Across investment research, finance operations, and data analytics roles, I have worked on company research, valuation materials, expense analysis, SQL and Python workflows, Tableau dashboards, and client-facing reporting.",
    "My work sits at the intersection of finance, data, and communication: turning market information, company data, and business problems into decision-ready analysis.",
  ],
  stats: [
    { value: "4", label: "Internships", sub: "Investment research, finance operations, data analytics, and client reporting" },
    { value: "3", label: "Analytical Projects", sub: "Intel site selection, UBI labor-supply simulation, and GRAMMYs audience analytics" },
  ],
};

export const SKILLS = [
  {
    key: "a.",
    title: "Finance & Markets",
    items: ["Company Research", "Sector Research", "Financial Analysis", "Valuation Support", "Credit Research", "Fixed Income Research", "Macro & Rates Analysis"],
  },
  {
    key: "b.",
    title: "Analytics",
    items: ["Statistical Analysis", "Econometric Modeling", "Data Cleaning & QA", "Data Integration", "Dashboard Development", "Sensitivity Analysis"],
  },
  {
    key: "c.",
    title: "Tools",
    items: ["Advanced Excel", "PowerPoint", "Tableau", "SQL", "Python", "R"],
  },
  {
    key: "d.",
    title: "Communication",
    items: ["Investor Materials", "Client Reports", "Executive Presentations", "Data Storytelling", "Stakeholder Updates"],
  },
];

export const EXPERIENCE = [
  {
    period: "Jul 2022 - Jun 2023",
    role: "Investment Research Fellow",
    company: "Marquee Equity · India",
    paragraphs: [
      "Researched 8+ early and growth-stage companies across TMT, consumer, education and B2B, assessing sector trends, funding momentum and competitive positioning.",
      "Distilled company and sector research into investor-facing narratives that informed mandate selection and deal prioritization.",
    ],
    tags: ["Equity Research", "Valuation", "Investor Decks"],
  },
  {
    period: "Jun 2023 - Jul 2023",
    role: "Data Analyst Intern",
    company: "nTalents.ai · Bangalore, India",
    paragraphs: [
      "Ran SQL and Python analysis across tens of thousands of records for 3+ enterprise clients and built client-facing dashboards.",
      "Packaged findings into stakeholder presentations, contributing to ~15% higher client satisfaction.",
    ],
    tags: ["SQL", "Python", "Dashboards"],
  },
  {
    period: "Aug 2023 - Nov 2023",
    role: "Finance & Operations Intern",
    company: "DLF Limited · Gurugram, India",
    paragraphs: [
      "Standardized expense reporting with Excel templates, shortening the monthly close and reducing reconciliation errors.",
      "Analyzed vendor and departmental spend; the findings fed a cost review credited with ~10% lower monthly operating costs.",
    ],
    tags: ["FP&A", "Excel", "Cost Analysis"],
  },
  {
    period: "Jan 2025 - May 2025",
    role: "Data Analytics Trainee",
    company: "The Global Tech Experience · Bloomington, IN",
    paragraphs: [
      "Built Tableau and Excel dashboards from multi-source energy and infrastructure data to support Intel's data-center site selection across five locations.",
      "Automated cleaning and reporting in Python, cutting manual prep and surfacing three engagement drop-off points in executive-ready reporting.",
    ],
    tags: ["Tableau", "Python", "Intel Project"],
  },
];

export const PROJECTS = [
  {
    index: "01",
    status: "Capstone",
    title: "Intel Data-Center Site Selection",
    meta: [
      { label: "Role", value: "Data Analytics Trainee" },
      { label: "Type", value: "Industry Project · TGTE" },
      { label: "Stack", value: "Tableau, Excel, Python" },
    ],
    breakdown: {
      problem: "Intel had to choose one of five candidate locations for a new data center, with energy, grid and infrastructure data scattered across sources.",
      approach: "Normalized multi-source data and built Tableau dashboards scoring every site on a single comparable scale, with the prep pipeline automated in Python.",
      result: "A clear, defensible site ranking, with days of manual prep collapsed to minutes per refresh.",
    },
    chart: {
      title: "Manual prep time per refresh · hours",
      bars: [
        { label: "BEFORE (MANUAL)", value: 9 },
        { label: "AFTER (PYTHON)", value: 2 },
      ],
      max: 10,
      footnote: "5 candidate sites · multi-source energy & infra data · Tableau",
    },
    tags: ["Tableau", "Python ETL", "Decision Modeling", "5 Sites"],
  },
  {
    index: "02",
    status: "Completed",
    title: "UBI Labor-Supply Simulation",
    meta: [
      { label: "Role", value: "Researcher & Builder" },
      { label: "Type", value: "Independent Project · IU" },
      { label: "Stack", value: "Python, NumPy, Pandas" },
    ],
    breakdown: {
      problem: "Whether a Universal Basic Income reduces labor supply depends on behavioral assumptions nobody can observe directly.",
      approach: "Built a Python simulation running the policy across a range of labor-supply elasticities, with full sensitivity analysis.",
      result: "A sensitivity band instead of a single misleading estimate: an honest read of how much the answer depends on assumptions.",
    },
    interactive: "ubi",
    github: "https://github.com/Shreyshth15/UBI-Labor-Supply-Simulation",
    tags: ["Python", "Econometrics", "Sensitivity Analysis", "Policy Modeling"],
  },
  {
    index: "03",
    status: "Client Project",
    title: "GRAMMYs Audience Analytics · The Recording Academy",
    meta: [
      { label: "Role", value: "Data Analytics Trainee" },
      { label: "Type", value: "Industry Project · TGTE" },
      { label: "Stack", value: "Tableau, Excel, Python" },
    ],
    breakdown: {
      problem: "The Recording Academy needed to see where digital audiences engaged and where they dropped off, with raw user data spread across sources.",
      approach: "Cleaned and structured the audience data, then built Tableau dashboards tracking engagement KPIs across content segments.",
      result: "Surfaced three drop-off points and the highest-performing content segments, packaged into executive-ready recommendations that shaped content strategy.",
    },
    interactive: "funnel",
    tags: ["Tableau", "KPI Dashboards", "Audience Analytics"],
  },
];

export const JOURNEY = [
  {
    num: "1",
    tag: "",
    place: "Indiana University Bloomington",
    period: "2026",
    text: "B.S. in Economics & Quantitative Methods with a minor in Psychology. Coursework and projects focused on econometrics, data analysis, economic modeling, finance, and decision-making.",
  },
  {
    num: "2",
    tag: "",
    place: "London School of Economics",
    period: "Jul - Aug 2024",
    text: "At the London School of Economics, I studied Intermediate Macroeconomics and Introduction to Econometrics. The coursework strengthened how I think about inflation, output gaps, policy decisions, assumptions, and empirical evidence.",
  },
  {
    num: "3",
    tag: "",
    place: "Markets & Self-Study",
    period: "Ongoing",
    text: "Continuing to build fixed income and credit foundations through self-directed CFA curriculum study, with focus on ethics, financial reporting, equity analysis, and fixed income.",
  },
];

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
