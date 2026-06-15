import type { BlogPost, NavLink, PackagePlan, PortfolioProject, ProcessStep, Service, Testimonial } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern websites, landing pages, e-commerce platforms, and custom web applications built with clean design, speed, and business goals in mind.",
    features: ["Business websites", "Landing pages", "E-commerce websites", "Portfolio websites", "Website redesigns", "Booking and contact websites"],
    href: "/services/web-development",
    cta: "Explore Web Development",
  },
  {
    number: "02",
    title: "Web App Development",
    description: "Custom web applications and digital tools for businesses that need more than a normal website.",
    features: ["Admin dashboards", "Customer portals", "Booking systems", "Internal tools", "Business management systems", "Custom web platforms"],
    href: "/services/web-development",
    cta: "Start a Web App",
  },
  {
    number: "03",
    title: "Graphic Design & Branding",
    description: "Strong visuals that help your brand look consistent, professional, and memorable across digital and print platforms.",
    features: ["Logo design", "Brand identity", "Social media creatives", "Flyers and posters", "Company profiles", "Business cards", "Ad creatives"],
    href: "/services/graphic-design-branding",
    cta: "Explore Branding",
  },
  {
    number: "04",
    title: "Social Media Management",
    description: "Planned content, creative designs, captions, and page management that keep your brand active and professional online.",
    features: ["Monthly content calendars", "Post and story designs", "Caption writing", "Page management", "Campaign creatives", "Monthly reporting"],
    href: "/services/social-media-management",
    cta: "Grow Social Media",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description: "Practical digital marketing strategies that help your business reach more people, generate inquiries, and improve visibility.",
    features: ["Meta ads", "Google ads", "SEO basics", "Lead generation", "Content strategy", "Campaign reporting"],
    href: "/services/digital-marketing",
    cta: "Plan a Campaign",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Restaurant Website Redesign",
    category: "Website",
    challenge: "The restaurant needed a cleaner online presence to show menu, location, and contact details.",
    solution: "Designed a mobile-friendly website with strong visuals, clear menu sections, and quick contact buttons.",
    services: ["Web Design", "Web Development", "Basic SEO"],
    href: "/contact",
  },
  {
    title: "Fashion Brand Social Media Kit",
    category: "Social Media",
    challenge: "The brand needed consistent visuals for product promotions and monthly campaigns.",
    solution: "Created a branded content style with post templates, story designs, captions, and campaign creatives.",
    services: ["Graphic Design", "Social Media Management"],
    href: "/contact",
  },
  {
    title: "Local Service Business Website",
    category: "Web Development",
    challenge: "The business relied only on word-of-mouth and needed a professional website to build trust.",
    solution: "Built a clear service-based website with inquiry forms, service pages, and call-to-action sections.",
    services: ["Website Design", "Development", "Contact Form"],
    href: "/contact",
  },
  {
    title: "E-commerce Product Store",
    category: "Website",
    challenge: "The client needed a simple online store to display products and receive customer inquiries.",
    solution: "Created a product-focused layout with category sections, product cards, and WhatsApp inquiry flow.",
    services: ["E-commerce UI", "Web Development"],
    href: "/contact",
  },
  {
    title: "Real Estate Lead Campaign",
    category: "Digital Marketing",
    challenge: "The business needed more qualified inquiries for property listings.",
    solution: "Created campaign visuals, landing page content, and lead-focused ad direction.",
    services: ["Digital Marketing", "Graphic Design", "Landing Page"],
    href: "/contact",
  },
  {
    title: "Corporate Brand Identity",
    category: "Branding",
    challenge: "The business needed a professional identity for digital and printed materials.",
    solution: "Designed a logo direction, color palette, typography, and brand assets.",
    services: ["Logo Design", "Branding", "Company Profile"],
    href: "/contact",
  },
];

export const packages: PackagePlan[] = [
  {
    name: "Starter",
    bestFor: "Small businesses starting their online presence.",
    features: ["Basic website or landing page", "Brand-aligned design", "Mobile responsive layout", "Contact form", "Basic SEO structure", "Launch support"],
    cta: "Request Starter Quote",
  },
  {
    name: "Growth",
    bestFor: "Businesses that need consistent digital presence.",
    features: ["Website improvements", "Monthly social media content", "Graphic designs", "Campaign creatives", "Basic SEO setup", "Monthly performance report"],
    cta: "Request Growth Quote",
    highlighted: true,
  },
  {
    name: "Premium",
    bestFor: "Brands that need complete digital support.",
    features: ["Custom website or web app", "Branding support", "Social media management", "Digital marketing campaigns", "Analytics and reports", "Priority support", "Growth strategy sessions"],
    cta: "Request Premium Quote",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "HyperDevo helped us create a more professional digital presence with clear visuals and better online communication.",
    name: "Local Founder",
    role: "Retail Business",
  },
  {
    quote: "The team understood our business direction and turned it into a clean website and strong brand visuals.",
    name: "Operations Lead",
    role: "Service Company",
  },
  {
    quote: "Creative, responsive, and easy to work with. The final output looked modern and business-ready.",
    name: "Marketing Manager",
    role: "Growing Brand",
  },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "We understand your business, audience, goals, and current digital presence." },
  { number: "02", title: "Plan", description: "We create a clear direction for design, content, pages, and marketing." },
  { number: "03", title: "Create", description: "We design, develop, and prepare the digital assets." },
  { number: "04", title: "Launch", description: "We publish, test, optimize, and support the final result." },
  { number: "05", title: "Grow", description: "We review performance and improve based on real feedback." },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Why Every Sri Lankan Business Needs a Professional Website",
    category: "Web Development",
    excerpt: "A professional website helps customers understand your business, trust your brand, and contact you easily.",
    readTime: "4 min read",
    date: "Jan 12, 2026",
  },
  {
    title: "Website vs Facebook Page: What Is Better for Your Business?",
    category: "Digital Strategy",
    excerpt: "Social media is important, but your website gives your business a stronger and more controlled online presence.",
    readTime: "5 min read",
    date: "Jan 18, 2026",
  },
  {
    title: "How Social Media Management Helps Small Businesses Grow",
    category: "Social Media",
    excerpt: "Consistent posting, branded visuals, and clear messaging can make your business look more active and reliable.",
    readTime: "4 min read",
    date: "Jan 26, 2026",
  },
  {
    title: "What Makes a Good Business Logo?",
    category: "Branding",
    excerpt: "A good logo should be simple, memorable, flexible, and suitable for your target market.",
    readTime: "3 min read",
    date: "Feb 03, 2026",
  },
  {
    title: "How Digital Marketing Helps Generate Leads",
    category: "Marketing",
    excerpt: "Digital campaigns can help businesses reach the right people and turn interest into real inquiries.",
    readTime: "5 min read",
    date: "Feb 11, 2026",
  },
  {
    title: "Website Development Cost in Sri Lanka: What Affects the Price?",
    category: "Web Development",
    excerpt: "Website cost depends on page count, design quality, features, content, integrations, and support needs.",
    readTime: "6 min read",
    date: "Feb 20, 2026",
  },
];

export const footerLinks = {
  quick: navLinks,
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Web App Development", href: "/services/web-development" },
    { label: "Graphic Design & Branding", href: "/services/graphic-design-branding" },
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ],
};
