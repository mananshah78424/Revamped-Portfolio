'use client';
import './intro.css';
import React, { useState, useEffect } from 'react';
import { aboutMe } from '../../../utils/text';
import FormmatedText from '@/utils/FormattedText';

const Intro = () => {
  const phrases = [
    'I love to play soccer and support Chelsea FC (KTBFFH)',
    'I lovvveee to travel and capture moments ✈️ ',
    'I try to hit the gym as much as possible 🏋️‍♂️',
    'I love spending time with my family and friends 👨‍👩‍👧‍👦',
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blink speed
    return () => clearInterval(cursorBlink);
  }, []);

  // Typing and deleting effect
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        // Deleting
        setDisplayText(currentPhrase.substring(0, typingIndex - 1));
        setTypingIndex((prev) => prev - 1);
        if (typingIndex === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Typing
        setDisplayText(currentPhrase.substring(0, typingIndex + 1));
        setTypingIndex((prev) => prev + 1);
        if (typingIndex === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? 50 : 100); // Typing speed
    return () => clearTimeout(typingInterval);
  }, [typingIndex, isDeleting, currentPhraseIndex]);

  return (
    <header className="about_intro_container">
      <div className="padding-top">
        <div className="w-layout-grid work_hero-header_component">
          <h1 className="intro-heading">
            <FormmatedText text={aboutMe.intro} />
            <br />
            <span className="text-span-21">{aboutMe.role}.</span>{' '}
            <FormmatedText text="Also "></FormmatedText>
            <span className="typed-text">{displayText}</span>
            <span
              className={`typed-cursor ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <FormmatedText text="_"></FormmatedText>
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Intro;
