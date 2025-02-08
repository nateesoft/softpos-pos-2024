import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import similarity from "string-similarity"
import { useNavigate } from "react-router-dom"

const intents = {
  เข้าสู่ระบบทดสอบ: [
    "เข้าสู่ระบบเดโม",
    "ระบบเดโม",
    "เข้าระบบทันที",
    "ล็อคอินทันที"
  ]
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.lang = "th-TH,en-US"
recognition.continuous = true
recognition.interimResults = false

const findIntent = (text) => {
  let bestMatch = { intent: "ไม่เข้าใจ", score: 0 }

  for (const intent in intents) {
    const {
      bestMatchIndex,
      bestMatch: { rating }
    } = similarity.findBestMatch(text, intents[intent])

    if (rating > bestMatch.score) {
      bestMatch = { intent, score: rating }
    }
  }

  return bestMatch.intent
}

const AICharacter = () => {
  const navigate = useNavigate()
  const [mood, setMood] = useState("neutral")
  const [command, setCommand] = useState("🎤 กำลังฟัง...")

  useEffect(() => {
    recognition.start()

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
      setCommand(`คุณพูดว่า: "${transcript}"`)
      handleCommand(transcript)
    }

    recognition.onend = () => recognition.start()
  }, [])

  const listenEnglish = () => {
    recognition.lang = "en-US"
    recognition.continuous = true
    recognition.interimResults = false
  }

  const handleCommand = (text) => {
    if (findIntent(text) === "เข้าสู่ระบบทดสอบ") {
      navigate("/")
    }
    if (text === "ฟังภาษาอังกฤษ") {
      listenEnglish()
    }
    if (text.includes("ยิ้ม")) {
      setMood("happy")
      speakThai("ฉันยิ้มให้คุณแล้วค่ะ")
    } else if (text.includes("เศร้า")) {
      setMood("sad")
      speakThai("ฉันรู้สึกเศร้าแล้วค่ะ")
    } else {
      setMood("neutral")
    }
  }

  const speakThai = (text) => {
    const synth = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "th-TH"
    synth.speak(utterance)
  }

  return (
    <div>
      <h2>{command}</h2>
      <motion.svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="50" fill="blue" />
        <circle cx="85" cy="85" r="5" fill="white" />
        <circle cx="115" cy="85" r="5" fill="white" />

        {mood === "happy" ? (
          <path
            d="M 80 120 Q 100 140, 120 120"
            stroke="white"
            strokeWidth="5"
            fill="none"
          />
        ) : mood === "sad" ? (
          <path
            d="M 80 140 Q 100 120, 120 140"
            stroke="white"
            strokeWidth="5"
            fill="none"
          />
        ) : (
          <line
            x1="80"
            y1="120"
            x2="120"
            y2="120"
            stroke="white"
            strokeWidth="5"
          />
        )}
      </motion.svg>
    </div>
  )
}

export default AICharacter
