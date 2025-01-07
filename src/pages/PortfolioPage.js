//projects developed, description
import React from 'react';
import PortfolioList from '../Components/PortfolioListComponent';
import FooterComponent from '../Components/FooterComponent';
// import projects from '../files/projects.json';
import projects from '../files/portfolio.json';


function PortfolioPage() {
    return (
        <div class="container">
            <PortfolioList projects={projects} />
            <FooterComponent />
        </div>
    );
}

export default PortfolioPage;