import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Components/PageHeaderContent';
import { Animate } from 'react-simple-animate';
import './style.scss';

const personalDetails = [
    {
        label: "Name : ",
        value: "Martina Sharron",
    },
    {
        label: "Father's Name : ",
        value: "Rajkumar Thomas",
    },
    {
        label: "DOB : ",
        value: "12/09/1998",
    },
    {
        label: "Age : ",
        value: "25",
    },
    {
        label: "Address : ",
        value: "14, INTUC COLONY, Bethaniyapuram, Madurai-16."
    },
    {
        label: "E-mail : ",
        value: "martinaraj1209@gmail.com",
    },
    {
        label: "contact no : ",
        value: "9360919181",
    },
    {
        label:"Marital status : ",
        value:"single",
    },

];

const jobSummary = "Experienced in areas related to e-commerce platform on international leval for 3years. Energetic and focused Production worker. Handled a several e-merchants links and websites complete database which provides a details to customers. Then committed myself to study full stack development course and python to upgrade my career and my professional skills" 

const About = () => {

    return (
        
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            
            <div className="about__content">
                
                 <div className="about__content__personalWrapper"></div>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(-900px)'
                    }}

                    end={{
                        transform: 'translatex(0px)'
                    }}
                >

                    <h3>Front End Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>
                 
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(500px)'
                    }}

                    end={{
                        transform: 'translatex(0px)'
                    }}
                >
                    
                 <div className="img"></div>

                    <h3> Personal Information</h3>
                    <ul>
                        {
                            personalDetails.map((item, i) => (
                                <li key={i} >
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Animate>
            </div>
        </section>
        
    )
}
export default About;