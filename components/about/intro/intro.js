'use client';
import './intro.css';
import React, { useState, useEffect } from 'react';
import { aboutMe } from '../../../utils/text';
import FormmatedText from '@/utils/FormattedText';
import Carousel from '../slideshow/carousel';

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
    <div className="flex flex-col items-center gap-24">
      <div className="relative flex h-fit w-full flex-col items-center justify-between">
        <div className="flex w-full flex-col mt-[7rem] gap-12 md:flex-row md:justify-between">
          <div className="flex w-full flex-col gap-4 md:w-fit md:items-start">
            {/* Background Blur Effect */}
            <div className="absolute -top-10 left-0 right-0 flex justify-center hidden sm:inline">
              <div className="intro-name"></div>
            </div>

            {/* Name and Title */}
            <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
              <span className="w-min text-7xl font-bold text-black drop-shadow-2xl dark:text-neutral-50 md:w-max z-10 font-ui-sans">
                Manan Shah,
              </span>
              <span className="flex w-full items-center justify-center text-2xl text-neutral-400 md:min-h-fit md:justify-start md:text-3xl mt-4">
                <span className="rubik-font">Full Stack Developer</span>
                <span className="styles-module_blinkingCursor__yugAC styles-module_blinking__9VXRT"></span>
              </span>
            </div>
          </div>

          {/* Right-side Carousel */}
          <div className="hidden mt-[5rem] mr-[12rem] md:flex flex-1 items-center justify-end">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
