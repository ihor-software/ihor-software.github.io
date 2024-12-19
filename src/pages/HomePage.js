import React from 'react';
import '../style/css/style.css';
import '../style/css/bootstrap.css';
import FooterComponent from '../Components/FooterComponent';
import avatar from '../img/about-us.png';
import rider from '../img/other/rider.gif';
import workout from '../img/other/workout.gif';
import work from '../img/other/work.gif';
import doctoo from '../img/portfolio/doctoo.png';
import wearplan from '../img/portfolio/wearplan.png';
import uem from '../img/portfolio/uem.png';
import luckybull from '../img/portfolio/luckybull.png';
import ServicesComponent from '../Components/ServicesComponent';
import TechnologiesComponent from '../Components/TechnologiesComponent';
import PolaroidComponent from '../Components/PolaroidComponent';
import OfferingsComponent from '../Components/OfferingsComponent';
import ExpertiseComponent from '../Components/ExpertiseComponent';
import AboutmeComponent from '../Components/AboutmeComponent';
import BootstrapCarousel from '../Components/PolaroidComponent';

function HomePage() {
    
const projects = [
        { url: uem, title: 'UEM Client', client: 'Blackberry', link: "https://docs.blackberry.com/en/endpoint-management/blackberry-uem-client/latest",date: '2024-07-01' },
        { url: doctoo, title: 'Doctoo', client: 'Radency', link: "https://doctoo.org", date: '2024-07-02' },
        { url: luckybull, title: 'Lucky Bull', client: 'Condor Gaming', link: " https://www.luckybull.com/en/", date: '2024-08-03' },
    ];
    return (
        <div className="HomePage">
           <AboutmeComponent />
            <OfferingsComponent />      
            <ExpertiseComponent />
            <PolaroidComponent photos={projects} />
            <br />
            <br />
            <FooterComponent />
        </div>
    );
}

export default HomePage;