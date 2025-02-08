import { useState } from "react";
import { motion } from "framer-motion";

const AICharacter = () => {
  const [mood, setMood] = useState("neutral");

  const handleCommand = (cmd) => {
    if (cmd.includes("ยิ้ม")) setMood("happy");
    else if (cmd.includes("เศร้า")) setMood("sad");
    else setMood("neutral");
  };

  return (
    <div>
      <button onClick={() => handleCommand("ยิ้ม")}>😊 ยิ้ม</button>
      <button onClick={() => handleCommand("เศร้า")}>😢 เศร้า</button>

      <motion.svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="50" fill="blue" />
        <circle cx="85" cy="85" r="5" fill="white" />
        <circle cx="115" cy="85" r="5" fill="white" />

        {mood === "happy" ? (
          <path d="M 80 120 Q 100 140, 120 120" stroke="white" strokeWidth="5" fill="none" />
        ) : mood === "sad" ? (
          <path d="M 80 140 Q 100 120, 120 140" stroke="white" strokeWidth="5" fill="none" />
        ) : (
          <line x1="80" y1="120" x2="120" y2="120" stroke="white" strokeWidth="5" />
        )}
      </motion.svg>
    </div>
  );
};

export default AICharacter;
