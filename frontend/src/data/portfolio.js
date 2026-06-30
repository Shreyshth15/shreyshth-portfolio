export const PROFILE = {
  name: "Shreyshth Sharma",
  firstName: "Shreyshth",
  lastName: "Sharma",
  role: "Finance · Analytics · Research",
  pronunciation: "shraysh-th",
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
    "Economics & Quantitative Methods graduate and CFA Level I candidate, turning messy, multi-source data into decision-ready research, from Bloomington, by way of New Delhi.",
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
    "I grew up in New Delhi and crossed the world to study Economics & Quantitative Methods at Indiana University Bloomington, with a minor in Psychology. Somewhere between a Money & Banking lecture and my first valuation model, the abstract turned concrete: markets are enormous systems of incentives, and the people who read them well are the ones who can find the signal under the noise.",
    "I'm happiest with a messy, multi-source dataset and a blank spreadsheet. At The Global Tech Experience I stitched energy and infrastructure data into a comparison framework that fed Intel's data-center site-selection across five locations. At Marquee Equity I researched 8+ early and growth-stage companies and translated dense sector reports into narratives investors could actually decide on. The thread is constant: take the complicated thing, make it clear, make it useful.",
    "The Psychology minor isn't a footnote, it's the behavioral lens behind the numbers. Markets are run by people, and understanding why they act sharpens every model I build. Pair that with an LSE summer in econometrics and the CFA Level I curriculum, and the quantitative spine and the judgment grow together.",
    "Right now I'm finishing my degree, sitting CFA Level I, and aiming at asset management, credit research and consulting. The goal isn't a dashboard for its own sake, it's rigor someone can act on with confidence, and a recommendation that makes the next decision obvious.",
  ],
  quote: "Quantitative rigor only matters if the answer is clear enough to act on.",
  stats: [
    { value: "4", label: "Internships" },
    { value: "8", label: "Startups researched" },
    { value: "3", label: "Languages" },
    { value: "5", label: "Intel site models" },
  ],
};

export const SKILLS = [
  {
    key: "a.",
    title: "Finance & Valuation",
    items: ["Financial Statement Analysis", "Valuation Fundamentals", "Fixed-Income & Credit", "Equity & Sector Research", "Performance & Attribution", "CFA Level I Curriculum"],
  },
  {
    key: "b.",
    title: "Data & Analytics",
    items: ["Multi-source Data Analysis", "KPI Dashboard Design", "Statistical Analysis", "Econometrics", "ML for Economic Data", "Exploratory Analysis"],
  },
  {
    key: "c.",
    title: "Tools & Programming",
    items: ["Advanced Excel", "PowerPoint", "Tableau", "SQL", "Python", "R", "Generative AI"],
  },
  {
    key: "d.",
    title: "Research & Communication",
    items: ["Investor-facing Materials", "Executive Reporting", "Client Reporting", "Stakeholder Coordination", "Data Storytelling", "Requirements Documentation"],
  },
];

export const EXPERIENCE = [
  {
    period: "Jul 2022 — Jun 2023",
    role: "Investment Research Fellow",
    company: "Marquee Equity · New Delhi, IN",
    paragraphs: [
      "Researched 8+ early and growth-stage companies across TMT, consumer goods, education and B2B services, analyzing sector trends, funding momentum and competitive positioning to support fundraising and investor outreach.",
      "Translated company and sector research into clear, investor-facing narratives that informed mandate selection and deal prioritization across the team pipeline.",
    ],
    tags: ["Equity Research", "Valuation", "Sector Analysis", "Investor Decks"],
  },
  {
    period: "Jan 2025 — May 2025",
    role: "Data Analytics Trainee",
    company: "The Global Tech Experience · Bloomington, IN",
    paragraphs: [
      "Built Tableau and Excel dashboards synthesizing large, multi-source energy and infrastructure datasets into a clear comparative framework, supporting Intel's data-center site-selection decision across five candidate locations.",
      "Automated data cleaning, reporting and documentation with Python and generative AI, cutting manual processing time, and packaged campaign data into executive-ready reporting that surfaced three engagement drop-off points and top-performing segments.",
    ],
    tags: ["Tableau", "Python", "GenAI", "Intel Project"],
  },
  {
    period: "Aug 2023 — Oct 2023",
    role: "Finance & Operations Intern",
    company: "DLF Limited · Gurugram, IN",
    paragraphs: [
      "Built Excel reporting templates that standardized expense categorization and shortened the monthly close, reducing manual errors and reconciliation issues.",
      "Analyzed vendor and departmental spending across three months; the findings fed a cost review credited with roughly 10% lower monthly operating costs.",
    ],
    tags: ["FP&A", "Excel", "Cost Analysis", "Reporting"],
  },
  {
    period: "Jun 2023 — Jul 2023",
    role: "Data Analytics Intern",
    company: "nTalents.ai · Bangalore, IN",
    paragraphs: [
      "Built client-facing dashboards and ran SQL and Python analysis across tens of thousands of records for 3+ enterprise clients, surfacing process bottlenecks previously tracked manually.",
      "Packaged findings into stakeholder presentations, contributing to roughly 15% higher client satisfaction.",
    ],
    tags: ["SQL", "Python", "EDA", "Client Dashboards"],
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
    paragraphs: [
      "A comparative decision framework for where Intel should locate a new data center. I pulled energy pricing, grid reliability and infrastructure data from multiple sources for five candidate locations, normalized it, and built Tableau dashboards that scored each site on a single, comparable scale.",
      "The win wasn't the model, it was the clarity. Automating the cleaning pipeline in Python collapsed days of manual prep, so the conversation could move from \"is the data right?\" to \"which site, and why?\"",
    ],
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
    paragraphs: [
      "A Python simulation modeling how a Universal Basic Income would shift labor supply across different elasticity assumptions. Rather than a single point estimate, it runs the policy across a range of behavioral responses and reports how sensitive the outcome is to each.",
      "The takeaway is the honest one: the answer to \"does UBI reduce work?\" depends almost entirely on an elasticity nobody can observe directly, so the useful output is the sensitivity band, not a headline number.",
    ],
    tags: ["Python", "Econometrics", "Sensitivity Analysis", "Policy Modeling"],
  },
  {
    index: "03",
    status: "In the queue",
    title: "More on the Way",
    meta: [
      { label: "Status", value: "Building" },
      { label: "Focus", value: "Credit & markets" },
      { label: "Updated", value: "Regularly" },
    ],
    paragraphs: [
      "Always working on something, mostly fixed-income studies, valuation models and small market-data tools as I move through the CFA program. Reach out if you'd like to know what's on the desk right now.",
    ],
    tags: ["Fixed Income", "Valuation", "Market Data"],
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
    tag: "Current",
    place: "Bloomington",
    region: "Indiana University · 2022 — 2026",
    text: "B.S. Economics & Quantitative Methods (STEM), Minor in Psychology, graduating May 2026. Coursework in Money & Banking, Machine Learning for Economic Data, Computational Macro, Game Theory and Econometrics. Executive Dean's List; Finance Chair, Principles of Cybersecurity.",
  },
  {
    tag: "Exchange",
    place: "London",
    region: "LSE · Jul — Aug 2024",
    text: "A London School of Economics summer in Intermediate Macroeconomics and Introduction to Econometrics, the quantitative spine of how I read data today.",
  },
  {
    tag: "Credential",
    place: "CFA Program",
    region: "Level I Candidate · Feb 2026",
    text: "Building fixed-income and markets fluency through the CFA curriculum, ethics, financial reporting, equity and fixed income, alongside the degree.",
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
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export const MARQUEE = [
  "Asset Management", "Credit Research", "Valuation", "Tableau", "Python", "SQL",
  "Econometrics", "CFA Level I", "Fixed Income", "Investment Research", "Consulting", "Advanced Excel",
];

export const CHAT_PROMPTS = [
  "What's his valuation experience?",
  "Tell me about the Intel project",
  "Why should I hire him?",
  "Is he CFA certified?",
];
