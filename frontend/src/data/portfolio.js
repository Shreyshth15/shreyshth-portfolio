export const PROFILE = {
  name: "Shreyshth Sharma",
  firstName: "Shreyshth",
  lastName: "Sharma",
  role: "Finance · Analytics · Investment Research",
  tagline: "Finance · Analytics · Investment Research",
  greeting: "Hello, I'm",
  est: "2002",
  location: "Bloomington, IN",
  timezone: "America/Indiana/Indianapolis",
  email: "shshar@iu.edu",
  emailAlt: "Shreshth2002@gmail.com",
  phone: "+1 (240) 733-5436",
  phoneHref: "tel:+12407335436",
  linkedin: "https://www.linkedin.com/in/shreyshth-sharma-0170",
  linkedinLabel: "/in/shreyshth-sharma-0170",
  resumeUrl: "/Shreyshth-Sharma-CV.pdf",
  shortBio:
    "Economics & Quantitative Methods graduate from Indiana University Bloomington, focused on finance, asset management, analytics and investment research. I turn messy data, market information and business problems into clear, decision-ready analysis.",
  heroTags: ["Finance", "Analytics", "Asset Management", "Credit Research"],
  built: ["Intel Site-Selection Models", "UBI Labor-Supply Simulation", "Investor Research Decks"],
  workedWith: ["Advanced Excel", "Tableau", "Python", "SQL", "R"],
  openTo: ["Asset Management", "Credit Research", "Consulting"],
};

export const PHOTOS = {
  portraitPrimary: "/images/iu-wylie.jpg",
  portraitSecondary: "/images/iu-wall.jpg",
  graduation: "/images/grad-stage.jpg",
};

export const ABOUT = {
  facts: [
    { label: "Born", value: "New Delhi, IN" },
    { label: "Based", value: "Bloomington, IN" },
    { label: "Degree", value: "B.S. Econ & Quant (STEM)" },
    { label: "Status", value: "Open to work" },
  ],
  paragraphs: [
    "I grew up in New Delhi and moved to the United States to study Economics & Quantitative Methods at Indiana University Bloomington, with a minor in Psychology. My work sits at the intersection of finance, data and decision-making: valuation, market research, dashboards and clear reporting.",
    "Across experiences at Marquee Equity, DLF, nTalents.ai and The Global Tech Experience, I've worked with company research, financial analysis, SQL/Python workflows, Tableau dashboards and client-facing reporting. The common thread is simple: take complex information, find the signal, and turn it into something useful.",
    "My psychology background adds a behavioral lens to markets and business decisions. Models matter, but so do incentives, judgment and communication.",
  ],
  quote: "Take complex information, find the signal, and turn it into something useful.",
  stats: [
    { value: "4", label: "Internships" },
    { value: "8+", label: "Companies Researched" },
  ],
};

export const SKILLS = [
  {
    key: "a.",
    title: "Finance & Markets",
    items: ["Financial Analysis", "Valuation", "Credit Research", "Investment Research", "Fixed Income", "CFA Curriculum"],
  },
  {
    key: "b.",
    title: "Analytics",
    items: ["Statistical Analysis", "Econometrics", "Dashboarding", "Multi-source Data Analysis", "KPI Reporting"],
  },
  {
    key: "c.",
    title: "Tools",
    items: ["Excel", "PowerPoint", "Tableau", "SQL", "Python", "R"],
  },
  {
    key: "d.",
    title: "Communication",
    items: ["Investor Materials", "Client Reporting", "Data Storytelling", "Stakeholder Updates"],
  },
];

export const EXPERIENCE = [
  {
    period: "Jul 2022 — Jun 2023",
    role: "Investment Research Fellow",
    company: "Marquee Equity · New Delhi, IN",
    paragraphs: [
      "Researched 8+ early and growth-stage companies across TMT, consumer, education and B2B, assessing sector trends, funding momentum and competitive positioning.",
      "Turned company and sector research into investor-facing narratives that informed mandate selection and deal prioritization.",
    ],
    tags: ["Equity Research", "Valuation", "Investor Decks"],
  },
  {
    period: "Jun 2023 — Jul 2023",
    role: "Data Analytics Intern",
    company: "nTalents.ai · Bangalore, IN",
    paragraphs: [
      "Ran SQL and Python analysis across tens of thousands of records for 3+ enterprise clients and built client-facing dashboards.",
      "Packaged findings into stakeholder presentations, contributing to ~15% higher client satisfaction.",
    ],
    tags: ["SQL", "Python", "Dashboards"],
  },
  {
    period: "Aug 2023 — Oct 2023",
    role: "Finance & Operations Intern",
    company: "DLF Limited · Gurugram, IN",
    paragraphs: [
      "Standardized expense reporting with Excel templates that shortened the monthly close and reduced reconciliation errors.",
      "Analyzed vendor and departmental spend; findings fed a cost review credited with ~10% lower monthly operating costs.",
    ],
    tags: ["FP&A", "Excel", "Cost Analysis"],
  },
  {
    period: "Jan 2025 — May 2025",
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
      approach: "Normalized multi-source data and built Tableau dashboards that scored every site on a single comparable scale, with the prep pipeline automated in Python.",
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
      result: "A sensitivity band instead of a single misleading estimate, an honest read of how much the answer depends on assumptions.",
    },
    interactive: "ubi",
    tags: ["Python", "Econometrics", "Sensitivity Analysis", "Policy Modeling"],
  },
];

export const EDUCATION = [
  {
    tag: "Origin",
    place: "New Delhi",
    region: "India · 2002 — 2022",
    text: "Born and raised. Where the curiosity for systems, incentives and markets got its early footing, long before economics was a degree on paper.",
  },
  {
    tag: "Degree",
    place: "Bloomington",
    region: "Indiana University · 2022 — 2026",
    text: "B.S. Economics & Quantitative Methods (STEM), Minor in Psychology. Graduated May 2026. Coursework in Money & Banking, Machine Learning for Economic Data, Computational Macro, Game Theory and Econometrics. Executive Dean's List; Finance Chair, Principles of Cybersecurity.",
  },
  {
    tag: "Exchange",
    place: "London",
    region: "LSE · Jul — Aug 2024",
    text: "A London School of Economics summer in Intermediate Macroeconomics and Introduction to Econometrics, the quantitative spine of how I read data today.",
  },
  {
    tag: "Markets",
    place: "CFA Program",
    region: "Fixed Income & Markets · 2026",
    text: "Building my fixed-income and markets foundation through the CFA curriculum, ethics, financial reporting, equity and fixed income, alongside the degree.",
  },
];

export const INTERESTS = [
  { symbol: "↗", title: "Markets & Macro", text: "Daily reading on rates, credit and the macro picture. Staying current isn't optional when the field moves every morning.", note: "Curious by default" },
  { symbol: "⚽", title: "Football", text: "Watching the game properly, formations, transitions, the why behind the goal. The same pattern-reading I bring to a market." },
  { symbol: "◷", title: "Philosophy", text: "Long-form arguments and first principles. Pressure-tests how I reason about everything else." },
  { symbol: "△", title: "Fitness", text: "The discipline ledger. Consistent inputs, compounding outputs, no shortcuts, the cleanest feedback loop I know." },
];

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const MARQUEE = [
  "Asset Management", "Credit Research", "Valuation", "Tableau", "Python", "SQL",
  "Econometrics", "Investment Research", "Fixed Income", "Financial Analysis", "Consulting", "Advanced Excel",
];

export const CHAT_PROMPTS = [
  "What roles is he targeting?",
  "What are his strongest skills?",
  "Tell me about his Intel project",
  "How can I contact him?",
];
