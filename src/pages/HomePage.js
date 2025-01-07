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
import proactive from '../img/portfolio/proactive.png';
import scantechnic from '../img/portfolio/scantechnic.png';
import ieat from '../img/portfolio/ieat.png';
import lacy from '../img/portfolio/shop.png';
import uem from '../img/portfolio/uemclient.png';
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
        { url: luckybull, title: 'Casino Platforms', client: 'Condor Gaming', link: " https://www.luckybull.com/en/", date: 'Jan 2024' },
        { url: doctoo, title: 'Doctoo Healthcare Platform', client: 'Radency', link: "https://doctoo.org", date: 'Dec 2022' },
        { url: proactive, title: 'Proactive Event Planner', client: 'Radency', link: "#", date: 'May 2021' },
        { url: scantechnic, title: 'AI Anomaly Detection Platform', client: 'Greentech', link: "#", date: 'Nov 2020' },
        { url: uem, title: 'UEM Device Security Application', client: 'BlackBerry', link: "https://docs.blackberry.com/en/endpoint-management/blackberry-uem-client/latest",date: '2024-07-01' },
        { url: ieat, title: 'iEat Food Delivery Service', client: 'EPAM', link: "#", date: 'Apr 2018' },
        { url: lacy, title: "Lacy's E-Commerce Platform", client: 'EPAM', link: "#", date: 'Jan 2017' }
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