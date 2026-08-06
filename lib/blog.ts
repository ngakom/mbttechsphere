export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "signs-your-business-process-needs-power-automate",
    title: "5 Signs Your Business Process Needs Power Automate",
    excerpt:
      "If a process lives in someone's inbox and their memory, it's a candidate for automation. Here's how to spot the ones worth fixing first.",
    category: "Automation",
    date: "2026-07-14",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Most organizations don't lack process — they lack visibility into where their processes actually break down. Power Automate is powerful, but it's only worth deploying against work that's genuinely repetitive, rule-based, and currently costing someone real time. Here are five signals we look for before recommending automation over a quick fix.",
      },
      {
        type: "h3",
        text: "1. The process only works because one person remembers the steps",
      },
      {
        type: "p",
        text: "If a workflow depends on tribal knowledge — \"ask Sarah, she knows how approvals work\" — it's fragile by design. Automating it forces the steps into the open, which is valuable even before you consider the time saved.",
      },
      {
        type: "h3",
        text: "2. Approvals happen over email, with no audit trail",
      },
      {
        type: "p",
        text: "Email approvals get lost, forwarded to the wrong person, or buried in a thread. A Power Automate approval flow gives you a timestamped, auditable record — which matters a lot more once you're in a regulated industry.",
      },
      {
        type: "h3",
        text: "3. Someone re-types the same data into two systems",
      },
      {
        type: "p",
        text: "Manual re-entry between SharePoint, Dataverse, an ERP, or a finance system is a reliable source of errors. If the data already exists somewhere, a flow can move it — accurately, every time.",
      },
      {
        type: "h3",
        text: "4. The process runs on a schedule someone has to remember",
      },
      {
        type: "p",
        text: "Weekly reports, month-end reminders, license renewals — anything that depends on a person remembering a date is a candidate for a scheduled cloud flow.",
      },
      {
        type: "h3",
        text: "5. You've already mapped it on a whiteboard more than once",
      },
      {
        type: "p",
        text: "If a process keeps coming up in planning sessions because it's painful, that recurring pain is usually a stronger signal than any efficiency estimate. Start there.",
      },
    ],
  },
  {
    slug: "power-bi-vs-excel-when-dashboards-replace-spreadsheets",
    title: "Power BI vs Excel: When Dashboards Actually Replace Spreadsheets",
    excerpt:
      "Excel isn't the enemy. But there's a point where a spreadsheet stops being a tool and starts being a liability — here's how to recognize it.",
    category: "Analytics",
    date: "2026-06-22",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Excel is genuinely good at what it does, which is exactly why so many reporting processes never leave it — until the spreadsheet is doing a job it was never designed for. The question isn't whether Power BI is 'better' in the abstract. It's whether your current reporting process has crossed a specific line.",
      },
      {
        type: "h3",
        text: "The line is usually one of these",
      },
      {
        type: "ul",
        items: [
          "More than one person edits the same workbook, and version conflicts are now a recurring conversation.",
          "Producing the report takes hours of manual copy-paste from multiple source systems.",
          "Leadership asks a follow-up question and the answer requires rebuilding the pivot table from scratch.",
          "The file is too large to open reliably, or formulas have started silently breaking.",
        ],
      },
      {
        type: "p",
        text: "If none of those apply, keep using Excel — it's the right tool. If two or more do, a Power BI model connected directly to your source data usually pays for itself within the first reporting cycle, because the report becomes something you build once and refresh, not something you rebuild every time.",
      },
      {
        type: "h3",
        text: "What actually changes",
      },
      {
        type: "p",
        text: "The real shift isn't visual polish — it's that a dashboard built on a proper data model lets non-technical stakeholders explore the numbers themselves, filter by region or period, and stop routing every question back to whoever owns the spreadsheet.",
      },
    ],
  },
  {
    slug: "modernizing-your-intranet-sharepoint-online-guide",
    title: "Modernizing Your Intranet: A Practical Guide to SharePoint Online",
    excerpt:
      "Most legacy intranets fail for the same three reasons. None of them require a full rebuild to fix.",
    category: "SharePoint",
    date: "2026-05-30",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "\"Nobody uses the intranet\" is one of the most common complaints we hear — and it's rarely a technology problem first. It's usually one of three specific issues, each with a different fix.",
      },
      {
        type: "h3",
        text: "Problem 1: Information architecture that made sense to IT, not to staff",
      },
      {
        type: "p",
        text: "If finding a policy document requires knowing which department owns it, the structure is organized around the org chart instead of the way people actually search. A modern SharePoint hub site, built around tasks and topics rather than departments, fixes this without touching a single document.",
      },
      {
        type: "h3",
        text: "Problem 2: Content that's years out of date",
      },
      {
        type: "p",
        text: "Static intranets rot because updating them is nobody's job. Page ownership, expiry reminders via Power Automate, and simple approval workflows keep content current without adding permanent overhead.",
      },
      {
        type: "h3",
        text: "Problem 3: No reason to visit more than once",
      },
      {
        type: "p",
        text: "A modern intranet earns repeat visits by surfacing something useful on arrival — a news feed, a request status, an approval waiting on you. That usually means connecting the intranet to the same Power Platform tools already automating the rest of the business, so it becomes a front door rather than a filing cabinet.",
      },
    ],
  },
  {
    slug: "where-copilot-actually-saves-time",
    title: "Where Copilot Actually Saves Time in the Microsoft 365 Stack",
    excerpt:
      "Copilot gets pitched as a blanket productivity boost. In practice, it earns its keep in a handful of specific, repeatable tasks.",
    category: "AI & Copilot",
    date: "2026-04-18",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "The honest answer to 'will Copilot make my team more productive' is: it depends entirely on which tasks you point it at. We've found it earns its subscription cost reliably in a small set of recurring scenarios, and underdelivers everywhere else.",
      },
      {
        type: "h3",
        text: "Where it consistently helps",
      },
      {
        type: "ul",
        items: [
          "First drafts — meeting summaries, status reports, and first-pass policy documents that a human will still edit.",
          "Finding things across Teams, email, and SharePoint when you know it exists but not where.",
          "Turning a rough Excel table into a starting formula or chart, rather than replacing analysis entirely.",
          "Explaining an unfamiliar Power Automate flow or Power Apps formula someone else built.",
        ],
      },
      {
        type: "p",
        text: "Where it tends to disappoint is anything requiring judgment specific to your business — pricing decisions, nuanced client communication, or domain expertise that isn't written down anywhere Copilot can see it. Treat it as a fast first draft generator, not a decision-maker, and it earns its place quickly.",
      },
    ],
  },
  {
    slug: "dataverse-vs-sharepoint-lists-power-apps-data-layer",
    title: "Dataverse vs SharePoint Lists: Choosing the Right Data Layer for Power Apps",
    excerpt:
      "This is the single most consequential decision in a Power Apps project, and it's usually made too quickly.",
    category: "Power Platform",
    date: "2026-03-11",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "SharePoint lists are free, familiar, and fast to spin up — which is exactly why so many Power Apps projects default to them, sometimes past the point where that's still the right call. Dataverse costs more and takes longer to set up, but the difference isn't just price.",
      },
      {
        type: "h3",
        text: "SharePoint lists make sense when",
      },
      {
        type: "ul",
        items: [
          "The app is departmental, with a small, stable user base.",
          "Data relationships are simple — one or two related lists, not a web of them.",
          "You need something running this week, not this quarter.",
        ],
      },
      {
        type: "h3",
        text: "Dataverse earns its cost when",
      },
      {
        type: "ul",
        items: [
          "Multiple apps or flows need to share the same underlying data.",
          "You need proper relational structure, business rules, or row-level security.",
          "The app is expected to scale past a few hundred concurrent users.",
          "You'll eventually want to layer AI Builder or Copilot Studio on top of the same data.",
        ],
      },
      {
        type: "p",
        text: "The mistake we see most often isn't picking the wrong option — it's not revisiting the decision as the app grows. A list-based app that's outgrown its foundation is fixable, but it's cheaper to plan for the outcome you actually expect than to migrate later.",
      },
    ],
  },
  {
    slug: "building-a-business-case-for-a-custom-power-app",
    title: "Building a Business Case for a Custom Power App",
    excerpt:
      "\"We need an app for that\" isn't a business case. Here's the framing that actually gets budget approved.",
    category: "Power Platform",
    date: "2026-02-09",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Internal tooling projects get stuck in approval more often than client-facing ones, mostly because the value is harder to state in a way finance can evaluate. A workable business case for a Power App usually has three parts.",
      },
      {
        type: "h3",
        text: "1. Name the current cost, specifically",
      },
      {
        type: "p",
        text: "Not \"this process is inefficient\" — instead, \"this task takes roughly four hours per week across three people, and errors from the current spreadsheet process require rework about twice a month.\" Specific, even if approximate, beats vague every time.",
      },
      {
        type: "h3",
        text: "2. Separate the app cost from the platform cost",
      },
      {
        type: "p",
        text: "If you're already licensed for Power Apps through Microsoft 365, the marginal cost of one more app is mostly build time, not new licensing. That materially changes the payback calculation compared to a from-scratch software purchase.",
      },
      {
        type: "h3",
        text: "3. Propose a scoped first version, not the full vision",
      },
      {
        type: "p",
        text: "A three-week build that solves the core problem is an easier yes than a three-month build that solves everything. Ship the narrow version, prove the value, then expand — the platform is built for exactly that kind of iteration.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(dateISO: string) {
  return new Date(dateISO).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
