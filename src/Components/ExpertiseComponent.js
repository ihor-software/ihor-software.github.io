import React from 'react';
import '../style/css/style.css';

const ExpertiseComponent = () => {
    const frontend = {
        name: "Frontend",
        technologies: [
            { name: "HTML", experience: 5 },
            { name: "Bootstrap", experience: 4 },
            { name: "JavaScript", experience: 4 },
            { name: "React", experience: 3 },
            { name: "Tailwind", experience: 3 },
            { name: "Angular", experience: 2 },
            { name: "RxJS", experience: 2 },
            { name: "SCSS", experience: 2 },
            { name: "Vue", experience: 1 },
            { name: "NgRX", experience: 1 },
        ],
    };

    const backend = {
        name: "Backend",
        technologies: [
            { name: ".Net", experience: 4 },
            { name: "Python", experience: 3 },
            { name: "Node.js", experience: 3 },
            { name: "Express", experience: 3 },
            { name: "PHP", experience: 2 },
            { name: "NestJS", experience: 1 },
        ],
    };

    const orm = {
        name: "ORM",
        technologies: [
            { name: "TypeOrm", experience: 2 },
            { name: "Prisma", experience: 2 },
            { name: "Sequelize", experience: 1 },
        ],
    };

    const deployment = {
        name: "Deployment",
        technologies: [
            { name: "AWS", experience: 3 },
            { name: "GCD", experience: 2 },
            { name: "DigitalOcean", experience: 2 },
            { name: "Azure", experience: 1 },
            { name: "Heroku", experience: 1 },
        ],
    };

    const database = {
        name: "Databases",
        technologies: [
            { name: "MySQL", experience: 4 },
            { name: "Firebase", experience: 4 },
            { name: "PostgreSQL", experience: 3 },
            { name: "MongoDB", experience: 1 },
        ],
    };

    const cicd = {
        name: "CI/CD",
        technologies: [
            { name: "Jenkins", experience: 4 },
            { name: "GHActions", experience: 2 },
            { name: "CircleCI", experience: 2 },
        ],
    };

    const webservers = {
        name: "Web Servers",
        technologies: [
            { name: "Apache", experience: 3 },
            { name: "Nginx", experience: 1 },
        ],
    };

    const testing = {
        name: "Testing",
        technologies: [
            { name: "Unit Testing", experience: 4 },
            { name: "UI Testing", experience: 4 },
            { name: "Test Automation", experience: 1 },
        ],
    };


    const expertise = [frontend, backend, orm, deployment, database, cicd, webservers, testing];

  return (
    <div>
        <h2
      style={{
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        marginTop: "100px",
        marginBottom: "50px",
      }}
    >
      My Expertise
    </h2>
    <div className="expertise-container">
            {expertise.map((category, index) => (
                <div className="expertise-card" key={index}>
                    <div className="card-header" style = {{color: 'black'}}>
                        <h2>{category.name}</h2>
                    </div>
                    <div className="card-content">
                        <ul className="technology-list">
                            {category.technologies.map((tech, index) => (
                                <li key={index} className="technology-item">
                                    <span className="technology-name">{tech.name}</span>
                                    <span className="technology-experience">{tech.experience} years</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
        </div>
  );
};

export default ExpertiseComponent;
