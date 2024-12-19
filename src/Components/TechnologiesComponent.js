import React, { useState, useRef, useEffect } from 'react';
import '../style/css/style.css'; // CSS for styling

const TechnologiesComponent = ({ technologies }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);
  const sliderRef = useRef(null);

  const handleMouseDown = (event) => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const sliderHeight = sliderRef.current.clientHeight;
    const sliderTop = sliderRef.current.getBoundingClientRect().top;
    let newSliderPosition = ((event.clientY - sliderTop) / sliderHeight) * 100;
    newSliderPosition = Math.max(0, Math.min(100, newSliderPosition));
    setSliderPosition(newSliderPosition);

    const selectedIndex = Math.floor((newSliderPosition / 100) * technologies.length);
    setSelectedTechnology(technologies[selectedIndex]);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="slider-container" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
      <div className="slider" ref={sliderRef} onMouseDown={handleMouseDown}>
        <div className="slider-thumb" style={{ top: `${sliderPosition}%` }}></div>
      </div>
      <div className="technology-box">
        <p>{selectedTechnology}</p>
      </div>
    </div>
  );
};

export default TechnologiesComponent;
