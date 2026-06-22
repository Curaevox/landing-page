export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavDropdown = {
  label: string;
  columns: {
    title: string;
    href: string;
    links: NavLink[];
  }[];
};

export const mainNav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Customers", href: "/case-studies" },
] as const;

export const productsDropdown: NavDropdown = {
  label: "Product",
  columns: [
    {
      title: "Inbound Agent",
      href: "/products/inbound-agent",
      links: [
        { label: "Answer & triage calls", href: "/products/inbound-agent#triage" },
        { label: "Doctor matching", href: "/products/inbound-agent#matching" },
        { label: "Automated booking", href: "/products/inbound-agent#booking" },
        { label: "Insurance & eligibility", href: "/products/inbound-agent#eligibility" },
      ],
    },
    {
      title: "Outbound Follow-up",
      href: "/products/follow-up",
      links: [
        { label: "Post-visit calls", href: "/products/follow-up#calls" },
        { label: "Follow-up reports", href: "/products/follow-up#reports" },
        { label: "Care-gap & adherence", href: "/products/follow-up#adherence" },
        { label: "No-show recovery", href: "/products/follow-up#recovery" },
      ],
    },
    {
      title: "Doctor Dashboard",
      href: "/products/dashboard",
      links: [
        { label: "Per-patient AI companion", href: "/products/dashboard#companion" },
        { label: "Configure agent actions", href: "/products/dashboard#configure" },
        { label: "Monitor & annotate", href: "/products/dashboard#monitor" },
        { label: "Summaries & notes", href: "/products/dashboard#summaries" },
      ],
    },
  ],
};

export const solutionsDropdown: NavDropdown = {
  label: "Solutions",
  columns: [
    {
      title: "By organization",
      href: "/solutions",
      links: [
        { label: "Hospitals & health systems", href: "/solutions#hospitals" },
        { label: "Clinics & private practice", href: "/solutions#clinics" },
        { label: "Specialty & multi-site", href: "/solutions#specialty" },
      ],
    },
    {
      title: "By outcome",
      href: "/solutions",
      links: [
        { label: "Capture every call", href: "/solutions#capture" },
        { label: "Reduce no-shows", href: "/solutions#no-shows" },
        { label: "Equitable access", href: "/solutions#equity" },
      ],
    },
  ],
};

export const resourcesDropdown: NavDropdown = {
  label: "Resources",
  columns: [
    {
      title: "Blog",
      href: "/blog",
      links: [{ label: "Access & access-ops insights", href: "/blog" }],
    },
    {
      title: "Guides",
      href: "/guides",
      links: [{ label: "Playbooks, checklists & tools", href: "/guides" }],
    },
    {
      title: "Glossary",
      href: "/glossary",
      links: [{ label: "Patient-access terms", href: "/glossary" }],
    },
  ],
};

export const footerLinks = {
  Product: [
    { label: "Inbound Agent", href: "/products/inbound-agent" },
    { label: "Outbound Follow-up", href: "/products/follow-up" },
    { label: "Doctor Dashboard", href: "/products/dashboard" },
  ],
  Solutions: [
    { label: "Hospitals & health systems", href: "/solutions#hospitals" },
    { label: "Clinics & private practice", href: "/solutions#clinics" },
    { label: "Specialty & multi-site", href: "/solutions#specialty" },
  ],
  Company: [
    { label: "Customers", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Resources: [
    { label: "Guides", href: "/guides" },
    { label: "Glossary", href: "/glossary" },
    { label: "Resources", href: "/resources" },
  ],
  Social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/curaevox" },
    { label: "X", href: "https://x.com/curaevox" },
    { label: "YouTube", href: "https://www.youtube.com/@curaevox" },
  ],
};

export const socialLinks = footerLinks.Social;
