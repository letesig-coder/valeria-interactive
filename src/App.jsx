// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { passages, START_PASSAGE } from './data/passages';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentKey, setCurrentKey] = useState(START_PASSAGE);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  // Estados persistentes para música e imagen
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const bgAudioRef = useRef(null);
  const sfxVoice1 = useRef(null);
  const sfxVoice2 = useRef(null);
  const sfxJojojo = useRef(null);
  const typingIntervalRef = useRef(null);

  // Inicializar audios con la ruta base correcta de Vite
  useEffect(() => {
    const base = import.meta.env.BASE_URL || '/';
    sfxVoice1.current = new Audio(`${base}sfx/voice1.mp3`);
    sfxVoice2.current = new Audio(`${base}sfx/voice2.mp3`);
    sfxJojojo.current = new Audio(`${base}sfx/jojojo.mp3`);
  }, []);

  const passageData = passages[currentKey] || passages[START_PASSAGE];

  // 1. Música Persistente
  useEffect(() => {
    if (!hasStarted) return;

    if (passageData.audio && passageData.audio !== currentAudio) {
      setCurrentAudio(passageData.audio);
      if (bgAudioRef.current) {
        const base = import.meta.env.BASE_URL || '/';
        bgAudioRef.current.src = `${base}audio/${encodeURIComponent(passageData.audio)}.mp3`;
        bgAudioRef.current.currentTime = 0;
        bgAudioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
      }
    }
  }, [currentKey, passageData, currentAudio, hasStarted]);

  // 2. Imagen Persistente
  useEffect(() => {
    if (passageData.image) {
      setCurrentImage(passageData.image);
    }
  }, [passageData]);

  // 3. Efecto SFX JOJOJO
  useEffect(() => {
    if (!hasStarted) return;
    if (passageData.sfx === 'JOJOJO' && sfxJojojo.current) {
      sfxJojojo.current.currentTime = 0;
      sfxJojojo.current.play().catch(() => {});
    }
  }, [currentKey, passageData, hasStarted]);

  // 4. Efecto Máquina de Escribir (Con asignación de voces corregida: Guiones = Voz 1, Normales = Voz 2)
  useEffect(() => {
    if (!hasStarted) return;

    const fullText = passageData.text || '';
    setDisplayedText('');
    setIsTyping(true);
    setTimeLeft(null); // Reiniciar el temporizador mientras escribe

    const isNarrative = fullText.trim().startsWith('-');
    const activeVoice = isNarrative ? sfxVoice1.current : sfxVoice2.current;

    let charIndex = 0;
    
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = setInterval(() => {
      if (charIndex < fullText.length) {
        const char = fullText[charIndex];
        setDisplayedText((prev) => prev + char);

        if (charIndex % 2 === 0 && char !== ' ' && char !== '\n' && activeVoice) {
          activeVoice.currentTime = 0;
          activeVoice.play().catch(() => {});
        }

        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingIntervalRef.current);
      }
    }, 35);

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, [currentKey, passageData, hasStarted]);

  // 5. Temporizador activado estrictamente CUANDO TERMINA de escribirse el texto
  useEffect(() => {
    if (!hasStarted || isTyping) return;

    if (passageData.clearTimer) {
      setTimeLeft(null);
      return;
    }
    if (passageData.timer) {
      setTimeLeft(passageData.timer);
    }
  }, [isTyping, passageData, hasStarted]);

  // Cuenta regresiva del temporizador
  useEffect(() => {
    if (timeLeft === null || !hasStarted || isTyping) return;

    if (timeLeft <= 0) {
      const target = passageData.timeoutTarget || "¿Eh?";
      setCurrentKey(target);
      setTimeLeft(null);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, passageData, hasStarted, isTyping]);

  const handleSelectOption = (targetKey) => {
    if (passages[targetKey]) {
      setCurrentKey(targetKey);
    } else {
      setCurrentKey("¿Eh?");
    }
  };

  // Saltar texto al hacer clic
  const handleScreenClick = () => {
    if (isTyping) {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      setDisplayedText(passageData.text || '');
      setIsTyping(false); // Al volverse false, el temporizador arrancará de inmediato si el pasaje lo requiere
    }
  };

  if (!hasStarted) {
    return (
      <div className="game-container start-screen">
        <h2>Para Valeria 🩷</h2>
        <button className="start-btn" onClick={() => setHasStarted(true)}>
          EMPEZAR
        </button>
      </div>
    );
  }

  const getImageSrc = (imgName) => {
    if (!imgName) return null;
    const filename = imgName.includes('.') ? imgName : `${imgName}.png`;
    const base = import.meta.env.BASE_URL || '/';
    return `${base}images/${filename}`;
  };

  return (
    <div className="game-container" onClick={handleScreenClick}>
      <audio ref={bgAudioRef} loop />

      {/* Imagen o GIF persistente */}
      {currentImage && (
        <div className="image-container">
          <img src={getImageSrc(currentImage)} alt="Escena visual" />
        </div>
      )}

      {/* Caja de texto principal */}
      <div className="dialogue-box">
        <p className="dialogue-text">{displayedText}</p>
      </div>

      {/* Temporizador visible solo cuando el texto ya terminó de salir */}
      {timeLeft !== null && !isTyping && (
        <div className="timer-badge">
          Tiempo restante: <span>{timeLeft}s</span>
        </div>
      )}

      {/* Opciones */}
      <div className="options-container">
        {!isTyping &&
          passageData.options.map((opt, idx) => (
            <button
              key={idx}
              className="option-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectOption(opt.target);
              }}
            >
              {opt.text}
            </button>
          ))}
      </div>
    </div>
  );
}