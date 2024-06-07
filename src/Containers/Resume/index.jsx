import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Components/PageHeaderContent';
import './style.scss';


const Resume = () => {

    return(
        <section id="resume" className="resume">
        <PageHeaderContent 
        headerText="My Resume"
        icon={<BsInfoCircleFill size = {40}/>}
        />
        <div>
            
        </div>
    </section>


    )
}
export default Resume;