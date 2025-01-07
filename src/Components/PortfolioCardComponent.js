import React from 'react';
import '../style/css/style.css';

const PortfolioCardComponent = ({
    imageUrl,
    title,
    description,
    technologies,
    impact = [],
    location,
    duration,
    lastUpdated
}) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-img-container">
                <img
                    className="portfolio-card-img"
                    src={require(`../img/portfolio/${imageUrl}`)}
                    alt={title}
                />
            </div>
            <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                    <h5 className="portfolio-card-title">{title}</h5>
                    <p className="portfolio-card-description">{description}</p>
                    <p className="portfolio-card-technologies">
                        <b>Technologies: </b>{technologies}
                    </p>
                    <p><b>Impact:</b></p>
                    <ul className="portfolio-card-impact-list">
                        {impact.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="portfolio-card-footer">
                        <small>{duration}. {location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCardComponent;
