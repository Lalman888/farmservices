import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
}

const TypewriterText: React.FC<TypewriterProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);

        // Clear the text after a delay of 2 seconds
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex(0);
        }, 2000); // Adjust the delay in milliseconds
      }
    }, 100); // Adjust the typing speed (milliseconds per character)

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return (
    <span className="font-mono text-lg border-r-2 border-orange-500">
      {displayText}
    </span>
  );
};

export default TypewriterText;
