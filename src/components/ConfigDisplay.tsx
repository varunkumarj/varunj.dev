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
          <span className="ml-2 text-primary-400">&quot;name&quot;</span>: <span className="text-warning">&quot;Varun Kumar Jallepalli&quot;</span>,
          <br />
          <span className="ml-2 text-primary-400">&quot;role&quot;</span>: <span className="text-warning">&quot;Full Stack Engineer&quot;</span>,
          <br />
          <span className="ml-2 text-primary-400">&quot;location&quot;</span>: <span className="text-warning">&quot;Arlington, TX&quot;</span>,
          <br />
          <span className="ml-2 text-primary-400">&quot;education&quot;</span>: <span className="text-warning">&quot;MS in Computer Science, UT Arlington&quot;</span>,
          <br />
          <span className="ml-2 text-primary-400">&quot;experience&quot;</span>: <span className="text-warning">&quot;4+ years&quot;</span>,
          <br />
          <span className="ml-2 text-primary-400">&quot;stack&quot;</span>: <span className="text-primary-400">{'{'}</span>
          <br />
          <span className="ml-4 text-primary-400">&quot;frontend&quot;</span>: [
          <br />
          <span className="ml-6 text-success">&quot;React.js&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;TypeScript&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;Next.js&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;Angular&quot;</span>
          <br />
          <span className="ml-4">],</span>
          <br />
          <span className="ml-4 text-primary-400">&quot;backend&quot;</span>: [
          <br />
          <span className="ml-6 text-success">&quot;Node.js&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;Express.js&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;LoopBack&quot;</span>
          <br />
          <span className="ml-4">],</span>
          <br />
          <span className="ml-4 text-primary-400">&quot;cloud&quot;</span>: [
          <br />
          <span className="ml-6 text-success">&quot;AWS Lambda&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;API Gateway&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;DynamoDB&quot;</span>,
          <br />
          <span className="ml-6 text-success">&quot;S3&quot;</span>
          <br />
          <span className="ml-4">]</span>
          <br />
          <span className="ml-2 text-primary-400">{'}'}</span>,
          <br />
          <span className="ml-2 text-primary-400">&quot;achievements&quot;</span>: [
          <br />
          <span className="ml-4 text-success">&quot;Delivery Excellence Award&quot;</span>,
          <br />
          <span className="ml-4 text-success">&quot;35% API Latency Reduction&quot;</span>,
          <br />
          <span className="ml-4 text-success">&quot;45% Database Query Optimization&quot;</span>
          <br />
          <span className="ml-2">],</span>
          <br />
          <span className="ml-2 text-primary-400">&quot;contact&quot;</span>: <span className="text-primary-400">{'{'}</span>
          <br />
          <span className="ml-4 text-primary-400">&quot;email&quot;</span>: <span className="text-warning">&quot;varunjallepalli@gmail.com&quot;</span>,
          <br />
          <span className="ml-4 text-primary-400">&quot;linkedin&quot;</span>: <span className="text-warning">&quot;linkedin.com/in/varunkumarj&quot;</span>,
          <br />
          <span className="ml-4 text-primary-400">&quot;github&quot;</span>: <span className="text-warning">&quot;github.com/varunkumarj&quot;</span>
          <br />
          <span className="ml-2 text-primary-400">{'}'}</span>
          <br />
          <span className="text-primary-400">{'}'}</span>
        </code>
      </pre>
    </div>
  );
}
