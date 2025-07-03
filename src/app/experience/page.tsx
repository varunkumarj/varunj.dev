export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold border-b pb-2 mb-6 text-primary-500">Experience</h1>
      
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary-300">Accenture</h3>
            <div className="text-gray-400 mt-1 md:mt-0">
              <span className="font-medium">Full Stack Developer</span> | Mar 2022 - Present
            </div>
          </div>
          <p className="text-gray-400 italic mb-4">Arlington, TX</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
            <li>Developed 25+ responsive UI components using React and TypeScript, improving user engagement by 40% and reducing bounce rates by 25%.</li>
            <li>Optimized SQL queries and API endpoints with Node.js and LoopBack, decreasing average response time by 35% and supporting 3x more concurrent users.</li>
            <li>Implemented AWS Lambda functions and DynamoDB for real-time data processing, reducing infrastructure costs by 30% while handling 2M+ daily events.</li>
            <li>Created comprehensive unit and integration tests with Jest and React Testing Library, increasing code coverage to 85% and reducing production bugs by 40%.</li>
            <li>Automated CI/CD pipelines using Jenkins and Git, reducing deployment time to QA by 60% and achieving zero production rollout failures across 200+ builds.</li>
            <li>Led stakeholder demos using Figma prototypes and tracked sprint progress in Jira, reducing feedback cycles by 50% and ensuring business alignment.</li>
            <li>Recognized with the &quot;Delivery Excellence&quot; award for launching 20+ mission-critical features ahead of schedule, helping reduce client operational costs by 15%.</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary-300">Inflolabs Pvt Ltd</h3>
            <div className="text-gray-400 mt-1 md:mt-0">
              <span className="font-medium">Software Engineer</span> | Mar 2019 - Feb 2022
            </div>
          </div>
          <p className="text-gray-400 italic mb-4">Visakhapatnam, India</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
            <li>Led the design and development of 15+ microservices using Node.js and React, improving API performance by 25% and enabling a 40% increase in concurrent platform users.</li>
            <li>Delivered custom integrations for 10+ enterprise clients, including SSO and payment gateways using Python and AWS, reducing onboarding time by 20%.</li>
            <li>Built dynamic User Interface features using Angular and TypeScript for analytics dashboards and storefronts, increasing customer retention by 30%.</li>
            <li>Developed and maintained React Native apps with Firebase, decreasing crash rates by 35% and achieving a 4.8/5 rating across Android and iOS platforms.</li>
            <li>Mentored a team of 5 junior engineers in Agile development workflows using GitScrum and Jira, improving sprint velocity and reducing code review cycles by 50%.</li>
            <li>Launched 10+ core features for the &quot;Remush&quot; Android app using Java, XML, and Retrofit, resulting in a 50% increase in downloads and a 35% boost in engagement within 6 months.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
