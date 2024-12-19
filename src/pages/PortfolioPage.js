//projects developed, description
import React from 'react';
import CardList from '../Components/CardListComponent';
import FooterComponent from '../Components/FooterComponent';
import projects from '../files/projects.json';


function PortfolioPage() {
    return (
        <div class="container">
            <CardList projects={projects} />
            <FooterComponent />
        </div>
    );
}

export default PortfolioPage;