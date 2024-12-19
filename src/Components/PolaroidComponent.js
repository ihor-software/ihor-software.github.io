import React, { useState, useEffect } from 'react';
import '../style/css/style.css'; // CSS for styling

const PolaroidGallery = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(photos.length - 1);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [photos.length]);

  const swipePolaroid = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === 'left'
        ? (prevIndex - 1 + photos.length) % photos.length
        : (prevIndex + 1) % photos.length
    );
  };

  return (
    <div>
    <h2
      style={{
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        marginTop: "50px",
      }}
    >
      Previous Work
    </h2>
    <div className="gallery" style={{marginTop: '50px'}}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`polaroid ${index === currentIndex ? "active" : ""}`}
          onClick={() => swipePolaroid("left")}
        >
          <div className="frame">
            <div
              className="image"
              style={{ backgroundImage: `url(${photo.url})` }}
            ></div>
          </div>
          <a href={photo.link}>
            <h3>{photo.title}</h3>
          </a>
          <h4>for: {photo.client}</h4>
          <p>{photo.date}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default PolaroidGallery;
