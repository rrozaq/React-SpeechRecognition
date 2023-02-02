import React, { useState, useEffect } from "react";

let speech;
if (window.webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.lang = 'id';
} else {
  speech = null;
}

const useVoice = () => {    
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);
    
    const listen = () => {
      setIsListening(!isListening);
      if (isListening) {
        speech.stop();
      } else {
        speech.start();
      }
    };
    
    useEffect(() => {
      if (!speech) {
        return;
      }
      speech.onresult = event => {
        setText(event.results[0][0].transcript);
        setIsListening(false);
        speech.stop();
      };
    }, [])

    return {
      text,
      isListening,
      listen,
      voiceSupported: speech !== null
    };
  }
  export {
    useVoice,
  };