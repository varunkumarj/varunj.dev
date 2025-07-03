import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-500">
          Contact
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-terminal-bg border border-terminal-border rounded-lg overflow-hidden shadow-lg">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-terminal-header border-b border-terminal-border px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <div className="text-sm text-gray-400 font-semibold">varunj.dev ~ console</div>
              <div className="w-4"></div> {/* Empty div for flex spacing */}
            </div>
            
            {/* Terminal Content */}
            <div className="bg-terminal-bg p-4">
              <div className="font-mono text-sm">
                <span className="text-success">&gt; console.log(&quot;Let&apos;s get in touch!&quot;);</span>
                <div className="text-gray-300 mt-1">Let&apos;s get in touch!</div>
              </div>
              
              {/* Contact Form */}
              <div className="p-4 mt-4">
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/varunkumarj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://twitter.com/varunkumarj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/varunkumarj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
