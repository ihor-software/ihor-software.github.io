import React from 'react';
import ProjectCardComponent from './ProjectCardComponent';

const CardList = ({ projects }) => {
  return (
    <div className="container">
      {projects.map((card, index) => (
        <div
          key={card.id} 
          style={{ marginBottom: index < projects.length - 1 ? '16px' : 0 }}
        >
          <ProjectCardComponent
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            lastUpdated={card.lastUpdated}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
