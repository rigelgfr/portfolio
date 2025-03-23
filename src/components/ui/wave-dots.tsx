import React, { useEffect, useState } from 'react';

const WaveLoadingDots: React.FC = () => {
  const [dotStates, setDotStates] = useState<number[]>([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  
  useEffect(() => {
    let animationInterval: NodeJS.Timeout;
    
    if (isAnimating) {
      let step = 0;
      
      animationInterval = setInterval(() => {
        step += 1;
        
        if (step > 6) {
          setDotStates([0, 0, 0]);
          setIsAnimating(false);
          step = 0;
          return;
        }
        
        setDotStates(prevState => {
            const newState = [...prevState];
            
            if (step === 1) newState[0] = 1;
            if (step === 2) { newState[0] = 2; newState[1] = 1; }
            if (step === 3) { newState[1] = 2; newState[2] = 1; }
            if (step === 4) newState[2] = 2;
            if (step === 5) newState[0] = 0;
            if (step === 6) newState[1] = 0;
                    
            return newState;
          });
      }, 180);
    } else {
      setTimeout(() => {
        setIsAnimating(true);
      }, 200);
    }
    
    return () => {
      if (animationInterval) clearInterval(animationInterval);
    };
  }, [isAnimating]);
  
  const getDotStyle = (state: number): string => {
    switch(state) {
      case 0: return 'translate-y-0 opacity-70';
      case 1: return '-translate-y-1 opacity-100';
      case 2: return 'translate-y-0 opacity-70';
      default: return 'translate-y-0 opacity-70';
    }
  };
  
  return (
    <span className="flex justify-center mt-10 text-md sm:text-lg font-semibold">
      <h1 className="flex items-center">
        more in the works
        <span className="inline-flex ml-1 space-x-0.5">
          {dotStates.map((state, index) => (
            <span 
              key={index}
              className={`transition duration-200 ${getDotStyle(state)}`}
            >
              .
            </span>
          ))}
        </span>
      </h1>
    </span>
  );
};

export default WaveLoadingDots;