"use client";

import { useState } from "react";

const BUSINESS_ID = "cmj9dfzi60002107aeff9h6o0";
const API_ENDPOINT = "https://dashboard-sigma-six-16.vercel.app/api/leads/submit";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessId: BUSINESS_ID,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Service: ${formData.service}\nSuburb: ${formData.suburb}\n\n${formData.message}`,
          source: "contact_page",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", suburb: "", service: "", message: "" });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We've received your enquiry and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="0456 994 959"
          />
        </div>

        <div>
          <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
            Suburb *
          </label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            required
            value={formData.suburb}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g. Brighton"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select a service...</option>
            <option value="Garden Design & Landscaping">Garden Design & Landscaping</option>
            <option value="Lawn Care & Maintenance">Lawn Care & Maintenance</option>
            <option value="Tree & Hedge Trimming">Tree & Hedge Trimming</option>
            <option value="Irrigation Systems">Irrigation Systems</option>
            <option value="Paving & Retaining Walls">Paving & Retaining Walls</option>
            <option value="Garden Cleanup & Mulching">Garden Cleanup & Mulching</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
        </button>

        <p className="text-sm text-gray-600 text-center">
          Or call us directly on <a href="tel:0456994959" className="text-primary-600 font-semibold">0456 994 959</a>
        </p>
      </form>
    </div>
  );
}
