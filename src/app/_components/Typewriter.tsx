"use client";
import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  textDelay,
  initialDelay,
  classNames,
}: {
  text: string;
  textDelay: number;
  initialDelay: number;
  classNames: string;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const delay = currentIndex === 0 ? initialDelay : textDelay;

      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textDelay, initialDelay, text]);

  return (
    <p
      className={`${classNames} after:content-["I"] after:animate-deepPulse after:font-black`}
    >
      {currentText}
    </p>
  );
};

export default Typewriter;
