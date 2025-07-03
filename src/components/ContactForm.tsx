"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/email";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendEmail({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClasses = "bg-gray-800 border border-gray-700 text-gray-200 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
        <input
          id="name"
          className={inputClasses}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          id="email"
          className={inputClasses}
          placeholder="your.email@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          className={inputClasses}
          placeholder="What would you like to discuss?"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      
      {submitSuccess && (
        <div className="bg-success/20 border border-success text-success p-3 rounded-md text-sm">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full md:w-auto transition-colors duration-200"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-pulse">Sending...</span>
            <span className="inline-block animate-spin">⏳</span>
          </>
        ) : (
          <>
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
