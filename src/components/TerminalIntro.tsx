"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPING_SPEED = 75;

export default function TerminalIntro() {
  const [text, setText] = useState("");
  const fullText = "Hello, I'm Varun — Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        clearInterval(typing);
      }
    }, TYPING_SPEED);
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl bg-black text-green-400 p-6 font-mono rounded shadow-lg"
    >
      <p className="mb-2">Booting varunj.dev...</p>
      <p>
        {text}
        <span className="ml-1 animate-pulse">█</span>
      </p>
    </motion.div>
  );
}

