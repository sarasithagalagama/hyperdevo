"use client";

import { useState } from "react";

const faqs = [
  ["What services does HyperDevo offer?", "HyperDevo offers web development, web app development, graphic design, branding, social media management, SEO, paid ads, and digital marketing."],
  ["Do you work with small businesses?", "Yes. We work with startups, small businesses, service brands, and growing companies that want a stronger digital presence."],
  ["Can you manage both website and social media?", "Yes. We can handle your website, brand visuals, social media content, and marketing campaigns as one connected digital plan."],
  ["Do you work with international clients?", "Yes. HyperDevo is based in Sri Lanka but built to support both local and international clients."],
  ["How do we start a project?", "You can book a call or send an inquiry. We will understand your goals and recommend the best package or custom plan."],
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <div className="faq-item" key={question}>
            <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span>{question}</span>
              <strong>{isOpen ? "−" : "+"}</strong>
            </button>
            <div className={`faq-answer ${isOpen ? "open" : ""}`}>
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
