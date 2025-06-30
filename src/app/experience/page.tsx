import GitLogEntry from "@/components/GitLogEntry";

const logs = [
  { hash: "f2a1c9a", message: "feat: Added Accenture – Fullstack Dev" },
  { hash: "9b3e2f8", message: "fix: Optimized API response with LoopBack" },
  { hash: "7cd91ef", message: "chore: Mentored 5 junior engineers" },
];

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold border-b pb-2 mb-6">Experience</h1>
      <div>
        {logs.map((log) => (
          <GitLogEntry key={log.hash} hash={log.hash} message={log.message} />
        ))}
      </div>
    </div>
  );
}
