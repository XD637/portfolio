import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [output, setOutput] = useState([
    "█ WELCOME TO MY SKILLS TERMINAL █",
    "Type 'help' to get started.",
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  const commands = {
    help: [
      "Available commands:",
      "- show skills : Display my skills",
      "- clear       : Clear the terminal",
    ],
    "show skills": [
      "My Skills:",
      "- JavaScript (ES6+)",
      "- React & Next.js",
      "- Tailwind CSS",
      "- Redux & State Management",
      "- Blockchain & Web3",
      "- Smart Contracts (Solidity)",
      "- UI/UX & Responsive Design",
    ],
    clear: [],
  };

  const handleCommand = () => {
    if (input === "clear") {
      setOutput([]);
    } else if (commands[input]) {
      setOutput([...output, `$ ${input}`, ...commands[input]]);
    } else {
      setOutput([...output, `$ ${input}`, "Command not found. Type 'help'."]);
    }
    setInput("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-24 px-6"
    >
      <h2 className="text-5xl font-extrabold tracking-tight mt-6">Skills Terminal</h2>
      <div className="mt-8 w-full max-w-2xl bg-slate-800 text-green-400 font-mono text-sm p-4 rounded-lg shadow-lg border border-gray-700">
        <div ref={terminalRef} className="h-64 overflow-y-auto whitespace-pre-line leading-relaxed">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="flex mt-2 items-center">
          <span className="text-green-500">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            className="bg-transparent outline-none border-none text-green-400 ml-2 w-full text-sm tracking-wide"
            autoFocus
          />
        </div>
      </div>
    </section>
  );
}
