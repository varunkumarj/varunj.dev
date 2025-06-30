import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold border-b pb-2 mb-6">Contact</h1>
      <div className="bg-gray-900 rounded-md">
        <div className="flex gap-6 text-gray-400 text-sm border-b border-gray-700 px-4 py-2">
          <span className="text-white">Console</span>
          <span>Elements</span>
          <span>Network</span>
        </div>
        <div className="p-4 font-mono text-sm text-green-400 bg-black border-b border-gray-700">
          &gt; console.log(&quot;Let&apos;s get in touch!&quot;);
        </div>
        <div className="p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
