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
    slug: "flyers-and-social-media-are-not-enough-why-your-business-needs-a-website",
    title: "Only on Flyers and Social Media? Why Your Business Still Needs a Website",
    excerpt:
      "Flyers get thrown away and social media posts disappear from feeds. If that's all your business relies on, here's what you're missing out on.",
    category: "Websites",
    date: "2026-10-28",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Flyers, WhatsApp statuses, Facebook and Instagram are great for getting attention — and many small businesses grow on them alone. But if they are the only places a customer can find you, you're building your business on ground you don't own. A website doesn't replace them; it gives all of them somewhere to send people.",
      },
      {
        type: "h3",
        text: "1. Flyers get thrown away, and posts get buried",
      },
      {
        type: "p",
        text: "A flyer is read once and lost. A social media post is seen for a day or two before it sinks under newer posts. When a customer remembers you a month later and wants your prices or opening hours, they have to scroll through old posts or ask you again. A website keeps everything in one place, available any time of day.",
      },
      {
        type: "h3",
        text: "2. Customers search Google before they buy",
      },
      {
        type: "p",
        text: "When people need a service — a hair salon, a plumber, an accountant — many of them type it into Google first. Without a website, you're often invisible in those searches, and the business that does have one gets the call. A website, combined with a Google Business Profile, puts you in front of people who are already looking.",
      },
      {
        type: "h3",
        text: "3. A website builds trust",
      },
      {
        type: "p",
        text: "Anyone can open a social media page in five minutes. A professional website with your own domain name (like yourbusiness.co.za), your services, prices, photos of your work and clear contact details tells customers you're established and serious. It's often the difference between someone enquiring and someone moving on.",
      },
      {
        type: "h3",
        text: "4. You own it — the platforms don't",
      },
      {
        type: "p",
        text: "Social media platforms change their rules, limit how many people see your posts, and can suspend accounts without warning. Your website and domain belong to your business. Keep using social media — but point every post, flyer and status back to your website, where you control what customers see.",
      },
      {
        type: "h3",
        text: "5. It answers questions while you're busy working",
      },
      {
        type: "p",
        text: "How much does it cost? Where are you? Are you open on Sunday? Do I need to book? Answering the same questions on WhatsApp all day takes time away from your actual work. A website answers them for you — and with online booking or an AI chatbot, it can even take the enquiry for you.",
      },
      {
        type: "h3",
        text: "Signs it's time for a website",
      },
      {
        type: "ul",
        items: [
          "Customers keep asking for your prices, address or hours on WhatsApp.",
          "You print flyers regularly but can't tell how many people they reach.",
          "People find your competitors on Google, but not you.",
          "Your photos and reviews are scattered across several social media pages.",
          "You want to look as professional as the bigger businesses in your area.",
        ],
      },
      {
        type: "p",
        text: "You don't need a big budget to start. A simple, mobile-friendly starter website with your services, prices, photos and contact details is often enough to make a real difference — and it can grow with your business.",
      },
    ],
  },
  {
    slug: "what-an-ai-chatbot-can-do-for-your-business-website",
    title: "What an AI Chatbot Can Do for Your Business Website",
    excerpt:
      "Your customers have questions at 10pm and on Sundays. An AI chatbot on your website can answer them instantly — here's what it's good for.",
    category: "AI Chatbots",
    date: "2026-10-14",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "An AI chatbot is a small chat window on your website that answers visitors' questions in plain language, any time of day. A few years ago this was only affordable for large companies. Today, a well-built chatbot can be added to a small business website at a modest cost — and it can save hours of repetitive messages every week.",
      },
      {
        type: "h3",
        text: "It answers the questions you get every day",
      },
      {
        type: "p",
        text: "Prices, opening hours, location, services, how to book, what to bring — most customer questions are the same handful, asked over and over. A chatbot trained on your business information answers them instantly and consistently, even when you're with a client or closed for the night.",
      },
      {
        type: "h3",
        text: "It keeps visitors on your website",
      },
      {
        type: "p",
        text: "When a visitor can't find an answer quickly, they leave — often to a competitor. A chatbot gives them an answer in seconds and can guide them to the next step: the booking page, your price list or your WhatsApp number.",
      },
      {
        type: "h3",
        text: "It works for every kind of business",
      },
      {
        type: "ul",
        items: [
          "Salons and beauty businesses: prices, styles, hours and booking.",
          "Professional services: what you offer, documents needed, how to get started.",
          "Retail and food: products, delivery areas, specials and order process.",
          "Schools and training: courses, fees, registration dates and requirements.",
        ],
      },
      {
        type: "h3",
        text: "What a chatbot shouldn't do",
      },
      {
        type: "p",
        text: "A good chatbot knows its limits. It should only answer from your business information, never make up prices or promises, and hand customers over to a real person — by phone, email or WhatsApp — for anything it can't handle. That's how we build ours.",
      },
      {
        type: "h3",
        text: "What it costs to run",
      },
      {
        type: "p",
        text: "Modern AI chatbots are charged by usage, so a small business with a modest number of conversations typically pays very little each month. We set spending limits so there are no surprises, and the chatbot can fall back to ready-made answers if the AI service is ever unavailable.",
      },
    ],
  },
  {
    slug: "what-a-website-really-costs-domain-hosting-and-design",
    title: "What a Website Really Costs: Domain, Hosting and Design Explained",
    excerpt:
      "Design, domain name, hosting, email — it's easy to be confused by what you're actually paying for. Here's a plain-language breakdown.",
    category: "Websites",
    date: "2026-09-30",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Many business owners are put off by websites because they're not sure what they'll end up paying. The good news is that a website's costs fall into a few simple parts. Once you know what each one is, it's much easier to compare quotes and budget properly.",
      },
      {
        type: "h3",
        text: "1. Design and build (once-off)",
      },
      {
        type: "p",
        text: "This is the work of planning, designing and building your website — the pages, layout, photos, text and features like booking forms or a chatbot. It's usually a once-off fee that depends on the number of pages and the features you need. A simple starter site costs far less than a site with online booking, AI features or a custom system behind it.",
      },
      {
        type: "h3",
        text: "2. Domain name (yearly)",
      },
      {
        type: "p",
        text: "Your domain is your address on the internet, such as yourbusiness.co.za. It's registered in your business's name and renewed every year. A .co.za domain is one of the most affordable options and tells customers you're a South African business.",
      },
      {
        type: "h3",
        text: "3. Hosting (monthly)",
      },
      {
        type: "p",
        text: "Hosting is the service that keeps your website online, fast and secure, 24 hours a day. It's usually a small monthly fee. Good hosting includes a security certificate (the padlock in the browser), regular backups and monitoring.",
      },
      {
        type: "h3",
        text: "4. Optional extras",
      },
      {
        type: "ul",
        items: [
          "Business email addresses, such as info@yourbusiness.co.za.",
          "An AI chatbot, which has a small usage-based running cost.",
          "Monthly updates — new prices, photos, specials or pages.",
          "Google Business Profile setup so you appear on Google Maps.",
        ],
      },
      {
        type: "h3",
        text: "Questions to ask before you sign",
      },
      {
        type: "ul",
        items: [
          "Is the domain registered in my business's name?",
          "What exactly is included in the monthly fee?",
          "How many changes are included after the site goes live?",
          "Will the website work well on mobile phones?",
          "What happens to my website and domain if I stop paying or move to another provider?",
        ],
      },
      {
        type: "p",
        text: "At MBT TechSphere Solutions we give every client a full breakdown of once-off and monthly costs upfront — no hidden fees. Get in touch for a quote tailored to your business.",
      },
    ],
  },
  {
    slug: "online-booking-turns-website-visitors-into-customers",
    title: "Online Booking: Turning Website Visitors into Paying Customers",
    excerpt:
      "Every extra step between \"I want this\" and \"I've booked\" loses customers. Here's how online booking on your website closes that gap.",
    category: "Websites",
    date: "2026-09-16",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "For service businesses — salons, clinics, consultants, tutors, mechanics — the moment a customer decides to book is precious. If they have to send a message, wait for a reply, and go back and forth about dates and prices, some of them give up. Online booking captures them while they're ready.",
      },
      {
        type: "h3",
        text: "Customers book when it suits them",
      },
      {
        type: "p",
        text: "Many people plan their week late at night or over the weekend. A booking form on your website lets them choose a service and a preferred date at any hour, without waiting for you to reply.",
      },
      {
        type: "h3",
        text: "You get all the details in one message",
      },
      {
        type: "p",
        text: "A good booking form asks for exactly what you need — name, phone number, service, date and any notes — and sends it to you in one tidy message, by email or straight to WhatsApp. No more piecing together details from five separate messages.",
      },
      {
        type: "h3",
        text: "Show the work, then let them book it",
      },
      {
        type: "p",
        text: "Photos sell services. Linking your gallery to your booking form means a customer can tap a photo of a style or result they love and book that exact service, with the photo attached for you to see.",
      },
      {
        type: "h3",
        text: "It doesn't have to be complicated",
      },
      {
        type: "p",
        text: "You don't need expensive booking software to start. A simple booking request that arrives on your WhatsApp works well for many small businesses, and it can grow into a full calendar system later if you need one.",
      },
    ],
  },
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
