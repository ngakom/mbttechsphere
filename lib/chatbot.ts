export const CONTACT_EMAIL = "info@mbttechsphere.co.za";

// Business facts the assistant may rely on. Keep this in sync with the homepage copy.
export const SYSTEM_PROMPT = `You are the website assistant for MBT TechSphere Solutions, a South African digital solutions company.

What MBT TechSphere does:
- Website design and development: modern, fast, mobile-friendly websites for small businesses and large enterprises, built to rank on Google and turn visitors into customers. Built with Next.js, React, TypeScript and Tailwind CSS, hosted on Vercel.
- AI chatbots: website chatbots that answer customer questions 24/7, capture leads and help book appointments, trained on the client's own business content. (You are an example of one.)
- Microsoft Power Platform: business apps with Power Apps and Dataverse, workflow automation with Power Automate and Copilot.
- SharePoint: modern intranets, document management and collaboration.
- Power BI: executive dashboards and analytics.
- Custom web apps and integrations: customer portals, booking systems and web apps in React, Next.js and ASP.NET Core.
- Industries served include healthcare, government, financial services, education, mining and manufacturing, as well as small local businesses.

How to reach the team: the "Book a Consultation" form at the bottom of this page (#contact), or email ${CONTACT_EMAIL}. The team replies within one business day.

Rules:
- Answer in 1-3 short paragraphs of plain text. No markdown headings or tables.
- Do not quote prices, timelines or guarantees. Pricing depends on scope; invite the visitor to book a free consultation for a quote.
- If you don't know something about the company, say so and point to the consultation form or email. Never invent clients, projects or facts.
- Stay on topic: the company's services, websites, chatbots, the Microsoft tools above, and how to get started. Politely decline unrelated requests.
- When a visitor shows interest in a project, encourage them to share their needs through the consultation form.`;

const FAQ: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["price", "cost", "quote", "how much", "budget", "rate"],
    answer:
      "Pricing depends on what you need — the number of pages, features like a chatbot or online bookings, and integrations. Book a free consultation using the form below and we'll send you a tailored quote.",
  },
  {
    keywords: ["chatbot", "chat bot", "bot", "ai assistant"],
    answer:
      "We build AI chatbots for your website that answer customer questions 24/7, capture leads and help book appointments — trained on your own business content. Tell us about your business in the consultation form and we'll show you what's possible.",
  },
  {
    keywords: ["website", "web site", "site", "landing", "ecommerce", "online store", "redesign"],
    answer:
      "We design and build modern, fast, mobile-friendly websites for small businesses and large enterprises, set up to rank on Google and turn visitors into customers. We can add an AI chatbot, booking forms and more.",
  },
  {
    keywords: ["power", "sharepoint", "automate", "dashboard", "power bi", "dataverse", "microsoft"],
    answer:
      "We also deliver Microsoft Power Platform solutions: business apps with Power Apps, automated workflows with Power Automate, SharePoint intranets and Power BI dashboards.",
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach", "talk", "consult", "book"],
    answer: `You can book a consultation with the form at the bottom of this page, or email us at ${CONTACT_EMAIL}. We reply within one business day.`,
  },
  {
    keywords: ["technology", "tech", "stack", "built with", "language", "react", "next"],
    answer:
      "Our websites are built with Next.js and React in TypeScript, styled with Tailwind CSS and hosted on Vercel — fast, secure and search-friendly.",
  },
];

// Keyword answers used when the AI service is unavailable (e.g. no API key configured).
export function faqReply(question: string): string {
  const q = question.toLowerCase();
  const match = FAQ.find((item) => item.keywords.some((k) => q.includes(k)));
  return (
    match?.answer ??
    `Thanks for your message! We build modern websites, AI chatbots and Microsoft Power Platform solutions. For anything specific, use the consultation form below or email ${CONTACT_EMAIL}.`
  );
}
