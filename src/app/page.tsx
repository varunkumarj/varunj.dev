import TerminalIntro from "@/components/TerminalIntro";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-8 py-12">
      <div className="max-w-screen-lg mx-auto">
        <TerminalIntro />
      </div>
    </main>
  );
}

