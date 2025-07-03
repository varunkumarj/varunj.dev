import React from 'react';

export default function ConfigDisplay() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="bg-terminal-header border-b border-terminal-border px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-error rounded-full"></div>
          <div className="w-3 h-3 bg-warning rounded-full"></div>
          <div className="w-3 h-3 bg-success rounded-full"></div>
        </div>
        <div className="mx-auto text-sm text-gray-400 font-semibold">developer.config.json</div>
      </div>
      <pre className="bg-terminal-bg p-6 rounded-b-md font-mono text-sm whitespace-pre-wrap overflow-x-auto">
        <code>
          <span className="text-primary-400">{'{'}</span>
          <br />
          <span className="ml-2 text-primary-400">"name"</span>: <span className="text-warning">"Varun Kumar Jallepalli"</span>,
          <br />
          <span className="ml-2 text-primary-400">"role"</span>: <span className="text-warning">"Full Stack Engineer"</span>,
          <br />
          <span className="ml-2 text-primary-400">"location"</span>: <span className="text-warning">"Arlington, TX"</span>,
          <br />
          <span className="ml-2 text-primary-400">"education"</span>: <span className="text-warning">"MS in Computer Science, UT Arlington"</span>,
          <br />
          <span className="ml-2 text-primary-400">"experience"</span>: <span className="text-warning">"4+ years"</span>,
          <br />
          <span className="ml-2 text-primary-400">"stack"</span>: <span className="text-primary-400">{'{'}</span>
          <br />
          <span className="ml-4 text-primary-400">"frontend"</span>: [
          <br />
          <span className="ml-6 text-success">"React.js"</span>,
          <br />
          <span className="ml-6 text-success">"TypeScript"</span>,
          <br />
          <span className="ml-6 text-success">"Next.js"</span>,
          <br />
          <span className="ml-6 text-success">"Angular"</span>
          <br />
          <span className="ml-4">],</span>
          <br />
          <span className="ml-4 text-primary-400">"backend"</span>: [
          <br />
          <span className="ml-6 text-success">"Node.js"</span>,
          <br />
          <span className="ml-6 text-success">"Express.js"</span>,
          <br />
          <span className="ml-6 text-success">"LoopBack"</span>
          <br />
          <span className="ml-4">],</span>
          <br />
          <span className="ml-4 text-primary-400">"cloud"</span>: [
          <br />
          <span className="ml-6 text-success">"AWS Lambda"</span>,
          <br />
          <span className="ml-6 text-success">"API Gateway"</span>,
          <br />
          <span className="ml-6 text-success">"DynamoDB"</span>,
          <br />
          <span className="ml-6 text-success">"S3"</span>
          <br />
          <span className="ml-4">]</span>
          <br />
          <span className="ml-2 text-primary-400">{'}'}</span>,
          <br />
          <span className="ml-2 text-primary-400">"achievements"</span>: [
          <br />
          <span className="ml-4 text-success">"Delivery Excellence Award"</span>,
          <br />
          <span className="ml-4 text-success">"35% API Latency Reduction"</span>,
          <br />
          <span className="ml-4 text-success">"45% Database Query Optimization"</span>
          <br />
          <span className="ml-2">],</span>
          <br />
          <span className="ml-2 text-primary-400">"contact"</span>: <span className="text-primary-400">{'{'}</span>
          <br />
          <span className="ml-4 text-primary-400">"email"</span>: <span className="text-warning">"varunjallepalli@gmail.com"</span>,
          <br />
          <span className="ml-4 text-primary-400">"linkedin"</span>: <span className="text-warning">"linkedin.com/in/varunkumarj"</span>,
          <br />
          <span className="ml-4 text-primary-400">"github"</span>: <span className="text-warning">"github.com/varunkumarj"</span>
          <br />
          <span className="ml-2 text-primary-400">{'}'}</span>
          <br />
          <span className="text-primary-400">{'}'}</span>
        </code>
      </pre>
    </div>
  );
}
