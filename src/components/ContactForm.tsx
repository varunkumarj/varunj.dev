"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/email";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await sendEmail({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        className="bg-gray-800 text-white p-2 rounded w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="bg-gray-800 text-white p-2 rounded w-full"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="bg-gray-800 text-white p-2 rounded w-full"
        placeholder="Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
