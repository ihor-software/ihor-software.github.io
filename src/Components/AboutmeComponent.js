import React from 'react';
import avatar from '../img/about-us.png';

const AboutmeComponent = () => {

  return (
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
  );
};

export default AboutmeComponent;
