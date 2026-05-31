"use client";

import { FormEvent, useState } from "react";

type ContactFormState = "idle" | "submitting" | "success" | "error";

const inquiryTypes = ["Project Inquiry", "Job Opportunity", "Consulting", "Partnership"];

export function ContactForm() {
  const [status, setStatus] = useState<ContactFormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        inquiryType: formData.get("inquiryType"),
        message: formData.get("message")
      })
    });

    const result = (await response.json()) as { message?: string; error?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(result.error ?? "Something went wrong. Please try again or schedule a call.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(result.message ?? "Thanks. Your message has been sent.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-header">
        <h3>Send a quick message</h3>
        <p>Prefer email first? Share the basics and I will respond with the next best step.</p>
      </div>
      <div className="contact-form-grid">
        <label>
          <span>Full name</span>
          <input name="fullName" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Inquiry type</span>
          <select name="inquiryType" defaultValue="Project Inquiry" required>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="contact-form-message">
          <span>Short message</span>
          <textarea name="message" rows={5} placeholder="Tell me what you want to build, improve, or discuss." required />
        </label>
      </div>
      <div className="contact-form-footer">
        <button className="button button-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        {message ? (
          <p className={`contact-form-status contact-form-status-${status}`} role="status">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
