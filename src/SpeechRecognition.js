import React, { useState, useEffect } from "react";
import { useVoice } from "./useVoice";

const SpeechRecognition = () => {
    const { text, isListening, listen, voiceSupported } = useVoice();
    const [chat, SetChat] = useState("");

    if (!voiceSupported) {
        return (
            <div className="app">
                <h1>
                Voice recognition is not supported by your browser, please retry with
                a supported browser e.g. Chrome
                </h1>
            </div>
        );
    }

    return (
        <div style = {{ width : 150, height : 150, marginLeft : 150 }}>
            <h3>Klik to voice</h3>
            <button onClick={listen} disabled={isListening}>Mulai</button>
            <br /> <br />
            {text}
        </div>
    );
};

export default SpeechRecognition;