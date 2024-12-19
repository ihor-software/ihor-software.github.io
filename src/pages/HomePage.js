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
           {/* <AboutmeComponent /> */}
           <section className="home_info_area">
                           <div className="banner_inner">
                               <div className="container">
                                   <div className="row">
                                       <div className="col-lg-7">
                                           <div className="banner_content">
                                               <h3 className="text-uppercase">Hello</h3>
                                               <h1 className="text-uppercase">I am Ihor Vasyliev</h1>
                                               <h5 className="text-uppercase">Full Stack Developer</h5>
                                               <ul>
                                                   <li>3+ years of experience in full stack development</li>
                                                   <li>Driving architectural decisions and strategic planning</li>
                                                   <li>Working on systems with millions of daily active users</li>
                                                   <li>Mentoring and growing team members</li>
                                                   <li>English level: Advanced</li>
                                               </ul>
                                               <div className="d-flex align-items-center">
                                                   <a type="button" className="btn btn-primary" href="mailto:ihor-software@gmail.com"><span>Email Me</span></a>
                                                   <a type="button" className="btn btn-primary" href="/cv"><span>Get CV</span></a>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-5">
                                           <div className="home_right_img">
                                               <img src={avatar} alt="" width="400" height="400" />
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </section>
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