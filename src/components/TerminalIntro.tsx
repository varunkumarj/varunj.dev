"use client";
import { useEffect, useState } from "react";

const lines = ["$ yarn start", "🚀 Launching varunj.dev..."];
const TYPE_SPEED = 70;

export default function TerminalIntro() {
  const [display, setDisplay] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line >= lines.length) return;
    if (char < lines[line].length) {
      const timeout = setTimeout(() => {
        setDisplay((d) => d + lines[line][char]);
        setChar(char + 1);
      }, TYPE_SPEED);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setDisplay((d) => d + "\n");
      setLine(line + 1);
      setChar(0);
    }, TYPE_SPEED);
    return () => clearTimeout(timeout);
  }, [line, char]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-green-400 text-2xl leading-relaxed text-center font-mono">
      <pre className="whitespace-pre-wrap mb-4">
        {display}
        <span className="animate-pulse">█</span>
      </pre>
      {line >= lines.length && (
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Varun Jallepalli</h1>
          <p className="text-gray-300">Creative Coder • Fullstack Developer</p>
          <p className="animate-pulse">Press ⏎ to Begin</p>
        </div>
      )}
    </div>
  );
}
