"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { theme } from "../styles/theme";

// Boot sequence lines
const BOOT_LINES = [
  "$ yarn dev",
  "> Launching varunj.dev...",
  "✅ Initializing system components...",
  "✅ Loading dependencies...",
  "✅ Mounting file system...",
  "✅ Establishing connection...",
  "✅ Terminal session initialized.",
  "✅ System ready.",
  "Press ⏎ to continue"
];

const TYPE_SPEED = 10; // Very fast typing for better UX
const LINE_PAUSE = 100; // Very short pause between lines

// Define particle type outside component to avoid re-creation
type Particle = {
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  animationDuration: number;
};

export default function TerminalIntro() {
  const router = useRouter();
  const [display, setDisplay] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesInitialized = useRef(false);

  // Handle typing animation
  useEffect(() => {
    if (line >= BOOT_LINES.length) {
      setBootComplete(true);
      return;
    }
    
    if (char < BOOT_LINES[line].length) {
      const timeout = setTimeout(() => {
        setDisplay((d) => d + BOOT_LINES[line][char]);
        setChar(char + 1);
      }, TYPE_SPEED);
      return () => clearTimeout(timeout);
    }
    
    const timeout = setTimeout(() => {
      setDisplay((d) => d + "\n");
      setLine(line + 1);
      setChar(0);
    }, LINE_PAUSE);
    return () => clearTimeout(timeout);
  }, [line, char]);

  // Handle keyboard events
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (bootComplete && e.key === "Enter") {
      setExitAnimation(true);
      setTimeout(() => router.push("/about"), 800); // Delay navigation for exit animation
    }
  }, [bootComplete, router]);

  // Handle click event as alternative to keyboard
  const handleClick = useCallback(() => {
    if (bootComplete) {
      setExitAnimation(true);
      setTimeout(() => router.push("/about"), 800);
    }
  }, [bootComplete, router]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);
  
  // Initialize particles on client-side only
  useEffect(() => {
    if (!particlesInitialized.current) {
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        width: Math.random() * 10 + 5,
        height: Math.random() * 10 + 5,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDuration: Math.random() * 10 + 10
      }));
      setParticles(newParticles);
      particlesInitialized.current = true;
    }
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen w-full bg-gray-950 text-terminal-text p-2 sm:p-4 font-mono relative overflow-hidden ${exitAnimation ? 'animate-fadeOut' : ''}`}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.colors.gray[800]} 0%, ${theme.colors.gray[950]} 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: `inset 0 0 100px ${theme.colors.primary[500]}10`
      }}
    >
      <div 
        className="terminal-window w-full"
        style={{ 
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
          maxHeight: '80vh',
          width: '95%',
          maxWidth: '900px'
        }}
      >
        {/* Terminal header */}
        <div className="terminal-header bg-gray-800 px-2 sm:px-4 py-2 flex items-center border-b border-gray-700 rounded-t-lg">
          <div className="flex space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mx-auto text-xs sm:text-sm text-gray-400 font-semibold">varunj.dev ~ terminal</div>
        </div>
        
        {/* Terminal content */}
        <div className="terminal-content p-3 sm:p-4 md:p-6 bg-gray-900 text-green-400 h-[300px] sm:h-[400px] md:h-[500px] overflow-y-auto rounded-b-lg">
          <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base font-mono leading-relaxed">
            {display}
            {!bootComplete && <span className="terminal-cursor inline-block ml-1 -mb-1 animate-pulse">█</span>}
          </pre>
          
          {bootComplete && (
            <div 
              className="mt-4 sm:mt-6 md:mt-8 text-center animate-fadeIn"
              style={{
                animation: 'fadeIn 0.5s ease-in-out',
              }}
            >
              <div className="my-3 sm:my-4 md:my-6 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-tight">
                  VARUNJ.DEV
                </div>
              </div>
              
              <div 
                className="btn-terminal inline-block cursor-pointer px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 hover:scale-105 mt-3 sm:mt-4 md:mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={handleClick}
              >
                <p className="text-sm sm:text-lg md:text-xl font-semibold animate-pulse text-white">Press ⏎ to continue</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Animated particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.animationDuration}s infinite linear`
            }}
          />
        ))}
      </div>
    </div>
  );
}
