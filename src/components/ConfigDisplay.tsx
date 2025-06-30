export default function ConfigDisplay() {
  return (
    <pre className="bg-[#111827] p-6 rounded-md font-mono text-sm whitespace-pre-wrap">
      <span className="text-cyan-400">{"{\n"}</span>
      <span className="ml-2 text-cyan-400">&quot;name&quot;</span>: <span className="text-yellow-300">&quot;Varun Jallepalli&quot;</span>,{"\n"}
      <span className="ml-2 text-cyan-400">&quot;role&quot;</span>: <span className="text-yellow-300">&quot;Frontend Engineer&quot;</span>,{"\n"}
      <span className="ml-2 text-cyan-400">&quot;stack&quot;</span>: [<span className="text-green-300">&quot;React&quot;</span>, <span className="text-green-300">&quot;TypeScript&quot;</span>, <span className="text-green-300">&quot;Node.js&quot;</span>],{"\n"}
      <span className="ml-2 text-cyan-400">&quot;quirks&quot;</span>: [<span className="text-green-300">&quot;Loves clean UI&quot;</span>, <span className="text-green-300">&quot;Coffee-powered&quot;</span>, <span className="text-green-300">&quot;Mentors juniors&quot;</span>]{"\n"}
      <span className="text-cyan-400">{"}"}</span>
    </pre>
  );
}
