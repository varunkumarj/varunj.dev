import ConfigDisplay from "@/components/ConfigDisplay";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-primary-500">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Hello, I'm Varun Kumar Jallepalli</h2>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                I'm a Full Stack Engineer with 4+ years of experience building scalable, high-performance web applications 
                using React, Node.js, and AWS. My expertise includes designing modular APIs, optimizing SQL queries, 
                and automating CI/CD workflows.
              </p>
              <p className="mb-4">
                I have a strong foundation in clean architecture, test-driven development, and delivering secure, 
                cloud-native systems. I'm passionate about writing reusable code and building intuitive user interfaces.
              </p>
              <p className="mb-4">
                Currently pursuing my Master of Science in Computer Science at The University of Texas at Arlington, 
                expected to graduate in May 2025.
              </p>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-200 text-sm sm:text-base">
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <ConfigDisplay />
          </div>
        </div>
        
        {/* Technical Skills Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-400">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 p-4 sm:p-5 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-primary-300">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium mb-3 text-primary-300">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium mb-3 text-primary-300">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'LoopBack', 'REST APIs', 'JWT Auth'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium mb-3 text-primary-300">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'GitHub Actions', 'Jenkins', 'CloudFormation'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium mb-3 text-primary-300">Testing & Quality</h3>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'Postman', 'SonarQube', 'Unit Testing', 'Integration Testing'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium mb-3 text-primary-300">Tools & Practices</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Jira', 'Agile/Scrum', 'CI/CD', 'Accessibility'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-400">Featured Project</h2>
          
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-primary-300">E-ShopPlus</h3>
              <div className="text-gray-400 mt-1 md:mt-0 font-medium text-sm sm:text-base">
                Next.js, React, Node.js, Express, Redis, Docker, GitHub Actions
              </div>
            </div>
            <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Developed a full-stack e-commerce platform using Next.js with server-side rendering, improving SEO performance by 50% and page load speed by 35%.</li>
              <li>Built RESTful APIs with Node.js and Express, implementing JWT authentication and Redis caching to reduce response latency by 30%.</li>
              <li>Integrated Socket.io for real-time order tracking and support chat, cutting average customer response time by 25%.</li>
              <li>Created a dynamic admin dashboard in React for product and order management, reducing update time by 50% and cutting operational errors by 40%.</li>
              <li>Configured GitHub Actions and Docker for CI/CD, slashing QA setup time by 60% and ensuring zero deployment failures to production.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
