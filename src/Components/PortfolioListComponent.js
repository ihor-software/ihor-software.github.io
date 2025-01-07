import React from 'react';
import PortfolioCardComponent from './PortfolioCardComponent';

const PortfolioListComponent = ({ projects }) => {
  return (
    <div className="container">
      {projects.map((card, index) => (
        <div
          key={card.id} 
          style={{ marginBottom: index < projects.length - 1 ? '16px' : 0 }}
        >
          <PortfolioCardComponent
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            technologies={card.technologies}
            impact={card.impact}
            location={card.location}
            duration={card.duration}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioListComponent;
