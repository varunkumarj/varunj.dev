interface GitLogEntryProps {
  hash: string;
  message: string;
}

export default function GitLogEntry({ hash, message }: GitLogEntryProps) {
  return (
    <div className="bg-gray-900 rounded-md p-4 font-mono text-sm border-l-4 border-gray-700 mb-4">
      <code className="text-gray-300">{hash}</code>
      <span className="ml-2 text-white">{message}</span>
    </div>
  );
}
