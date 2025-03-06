import { motion } from "framer-motion"

const Character = () => {
  console.log("Character")
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <circle cx="100" cy="100" r="50" fill="blue" />
      <circle cx="85" cy="85" r="5" fill="white" />
      <circle cx="115" cy="85" r="5" fill="white" />
      <path
        d="M 80 120 Q 100 140, 120 120"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />
    </motion.svg>
  )
}

export default Character
