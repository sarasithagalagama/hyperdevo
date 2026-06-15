"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";

type Errors = Partial<Record<"name" | "email" | "service" | "message", string>>;

const services = ["Web Development", "Web App Development", "Graphic Design & Branding", "Social Media Management", "Digital Marketing", "Complete Digital Package", "Other"];
const budgets = ["Below LKR 50,000", "LKR 50,000 - 100,000", "LKR 100,000 - 250,000", "LKR 250,000+", "Not sure yet"];

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const email = String(form.get("email") ?? "");

    if (!form.get("name")) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!form.get("service")) nextErrors.service = "Choose a service.";
    if (!form.get("message")) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    setSuccess(false);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    setSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <Field label="Name" name="name" error={errors.name} required />
      <Field label="Business name" name="business" />
      <Field label="Email" name="email" type="email" error={errors.email} required />
      <Field label="Phone / WhatsApp" name="phone" />
      <Select label="Service needed" name="service" options={services} error={errors.service} required />
      <Select label="Budget range" name="budget" options={budgets} />
      <div className="form-field full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && <span id="message-error">{errors.message}</span>}
      </div>
      <Button type="submit" disabled={loading} className="full justify-center">
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
      {success && <p className="success-message">Thanks for reaching out. We received your inquiry and will contact you soon.</p>}
    </form>
  );
}

function Field({ label, name, type = "text", error, required }: { label: string; name: string; type?: string; error?: string; required?: boolean }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error && <span id={`${name}-error`}>{error}</span>}
    </div>
  );
}

function Select({ label, name, options, error, required }: { label: string; name: string; options: string[]; error?: string; required?: boolean }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} required={required} defaultValue="" aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}>
        <option value="" disabled>
          Select option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span id={`${name}-error`}>{error}</span>}
    </div>
  );
}
