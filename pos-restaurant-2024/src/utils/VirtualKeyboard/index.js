import { TextField } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import Keyboard from "react-simple-keyboard"

import "react-simple-keyboard/build/css/index.css"
import "./index.css"

const thaiLayout = {
  'default': [
    '- ๅ / _ ภ ถ ุ ึ ค ต จ ข ช {bksp}',
    '{tab} ๆ ไ ำ พ ะ ั ี ร น ย บ ล ฃ',
    '{lock} ฟ ห ก ด เ ้ ่ า ส ว ง {enter}',
    '{shift} ผ ป แ อ ิ ื ท ม ใ ฝ {shift}',
    '.com @ {space}'
  ],
  'shift': [
    '% + ๑ ๒ ๓ ๔ ู ฿ ๕ ๖ ๗ ๘ ๙ {bksp}',
    '{tab} ๐ " ฎ ฑ ธ ํ ๊ ณ ฯ ญ ฐ , ฅ',
    '{lock} ฤ ฆ ฏ โ ฌ ็ ๋ ษ ศ ซ . {enter}',
    '{shift} ( ) ฉ ฮ ฺ ์ ? ฒ ฬ ฦ {shift}',
    '.com @ {space}'
  ]
}

const enLayout = {
  'default': [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    '{lock} a s d f g h j k l ; \' {enter}',
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space}'
  ],
  'shift': [
    '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : " {enter}',
    '{shift} Z X C V B N M < > ? {shift}',
    '.com @ {space}'
  ]
}

const VirtualKeyboard = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"))
  const [keyBoardLayout, setKeyBoardLayout] = useState(enLayout)

  const [layoutName, setLayoutName] = useState("default")
  const [input, setInput] = useState("")
  const keyboardRef = useRef(null)

  const onChangeInput = (event) => {
    const input = event.target.value
    setInput(input)

    if (keyboardRef.current) {
      keyboardRef.current.setInput(input)
    }
  }

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}"){
      handleShift(button)
    }
  }

  const handleShift = (button) => {
    if (button === "{lock}") {
      if (language === "en") {
        setKeyBoardLayout(thaiLayout)
        setLanguage("th")
      } else if (language === "th") {
        setKeyBoardLayout(enLayout)
        setLanguage("en")
      }
    } else {
      setLayoutName((prevLayout) =>
        prevLayout === "default" ? "shift" : "default"
      )
    }
  }

  const onChange = (input) => {
    setInput(input)
  }

  useEffect(()=> {
    if ("th" === language) {
      setLanguage("th")
      setKeyBoardLayout(thaiLayout)
    } else {
      setLanguage("en")
      setKeyBoardLayout(enLayout)
    }
  }, [language])

  return (
    <div>
      <TextField value={input} onChange={onChangeInput} fullWidth />
      <Keyboard 
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={keyBoardLayout}
      />
    </div>
  )
}

export default VirtualKeyboard
