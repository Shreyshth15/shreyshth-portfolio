export const PROFILE = {
  name: "Shreyshth Sharma",
  firstName: "Shreyshth",
  lastName: "Sharma",
  pronunciation: 'Pronounced "Shrey-sh-th Shar-ma" · Goes by Shrey',
  role: "Finance · Analytics · Investment Research",
  tagline: "Shrey Sharma · Finance · Analytics · Investment Research",
  greeting: "Hello, I'm",
  est: "2002",
  location: "Burtonsville, MD · Washington-Baltimore Area",
  relocation: "Open to relocation nationwide · NYC · Chicago first",
  timezone: "America/Indiana/Indianapolis",
  email: "shshar@iu.edu",
  emailAlt: "Shreshth2002@gmail.com",
  phone: "+1 (240) 733-5436",
  phoneHref: "tel:+12407335436",
  linkedin: "https://www.linkedin.com/in/shreyshth-sharma-0170",
  linkedinLabel: "/in/shreyshth-sharma-0170",
  resumeUrl: "/Shreyshth-Sharma-CV.pdf",
  shortBio:
    "Economics & Quantitative Methods graduate from Indiana University Bloomington, with a minor in Psychology, focused on finance, asset management, analytics and investment research. I turn market information, data and business problems into clear, decision-ready analysis.",
  heroTags: ["Finance", "Analytics", "Asset Management", "Credit Research", "Fixed Income", "Behavioral Economics"],
  built: ["Intel Site-Selection Models", "UBI Labor-Supply Simulation", "Investor Research Decks"],
  workedWith: ["Advanced Excel", "Tableau", "Python", "SQL", "R"],
  openTo: ["Asset Management", "Credit Research", "Structured Finance", "Portfolio & Performance Analytics", "Investment Research", "Consulting"],
};

export const PHOTOS = {
  portraitPrimary: "/images/iu-wylie.jpg",
  portraitSecondary: "/images/iu-wall.jpg",
  graduation: "/images/grad-stage.jpg",
};

export const ABOUT = {
  facts: [
    { label: "Born", value: "New Delhi, India" },
    { label: "Based", value: "Burtonsville, MD" },
    { label: "Degree", value: "B.S. Econ & Quant (STEM)" },
    { label: "Status", value: "Open to work" },
  ],
  paragraphs: [
    "I grew up in New Delhi. In 2021, still a teenager, I moved 12,000 km to the United States on my own, a direct admit to Indiana University's Kelley School of Business, set on finance.",
    "At the end of my sophomore year I made the least obvious call of my degree: I left Kelley for the College of Arts and Sciences to study Economics and Quantitative Methods, a new STEM-designated program. Kelley did not offer an economics major, and I wanted quantitative depth over a familiar label: econometrics, machine learning on economic data, computational macroeconomics. I took the decision to my professors and academic advisors. It is the best academic decision I have made.",
    "That switch is why my work sits where it does, at the intersection of finance, data, and decision-making. Across Marquee Equity, DLF, nTalents.ai, and The Global Tech Experience, I have done company research, financial analysis, SQL and Python workflows, Tableau dashboards, and client-facing reporting. The thread is simple: take complex information, find the signal, and turn it into something a decision-maker can use.",
    "My psychology minor adds a behavioral lens to markets and business decisions. Models matter, but so do incentives, judgment, and communication.",
  ],
  stats: [
    { value: "4", label: "Internships" },
    { value: "8+", label: "Companies Researched" },
  ],
};

export const SKILLS = [
  {
    key: "a.",
    title: "Finance & Markets",
    items: ["Financial Analysis", "Valuation", "Credit Research", "Investment Research", "Fixed Income & Credit", "Markets & Macro"],
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
    period: "Jul 2022 - Jun 2023",
    role: "Investment Research Fellow",
    company: "Marquee Equity · New Delhi, India",
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
    tag: "Origin",
    place: "New Delhi",
    period: "2002 - 2021",
    text: "Born and raised. Markets, incentives, and systems pulled at me long before economics was a degree on paper. In 2021 I left home as a teenager for a country I had never lived in, 12,000 km away, to find out what I could build on my own.",
  },
  {
    num: "2",
    tag: "The Switch",
    place: "Bloomington",
    period: "2021 - 2026",
    text: "I arrived as a Kelley School of Business direct admit, set on finance. At the end of sophomore year I chose depth over the familiar label and moved to the College of Arts and Sciences for Economics and Quantitative Methods, a program built on econometrics, machine learning on economic data, and computational macroeconomics. My professors backed the move, my grades in economics settled it, and the Executive Dean's List the following year proved the bet right. By graduation in May 2026 I had also run budgets and events as Finance Chair of Principles of Cybersecurity, managing roughly $2K a semester for workshops with EY, AT&T, and Accenture.",
  },
  {
    num: "3",
    tag: "Exchange",
    place: "London",
    period: "Jul - Aug 2024",
    text: "A summer at the London School of Economics, and the point where theory started paying rent. Intermediate Macroeconomics taught me to read policy the way policymakers argue about it: output gaps, inflation dynamics, the machinery behind a rate decision. Introduction to Econometrics gave me the habit I still use every day: state the assumption, test it, and let the data tell you when you are wrong. I came back reading markets differently.",
  },
  {
    num: "4",
    tag: "Markets",
    place: "Markets",
    period: "Ongoing",
    text: "Building fixed income and credit foundations through self-directed study of the CFA curriculum: ethics, financial reporting, equity, and fixed income. The goal is simple: be the analyst who understands both the model and the market it lives in.",
  },
];

export const JOURNEY_CLOSING = "The distance was the easy part.";

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
