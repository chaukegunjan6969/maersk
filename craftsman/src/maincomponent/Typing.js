import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, [text, speed]);

  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing p-4 sm:p-6 md:p-8 lg:p-10 m-4 sm:m-6 md:m-8 lg:m-10 flex justify-center items-center">
      {displayedText}
    </div>
  );
};

export default TypingEffect;
