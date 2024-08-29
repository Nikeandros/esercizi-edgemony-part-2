"use client";

import React, { useRef, useEffect, useState } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(false);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing audio:", error);
          setShowPlayButton(true); // Mostra il pulsante di riproduzione se l'autoplay fallisce
        }
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {showPlayButton ? (
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
      ) : null}
      <p>Status: {isPlaying ? 'Playing' : 'Paused'}</p>
    </div>
  );
};

export default BackgroundMusic;
