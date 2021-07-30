import React from 'react'
import '../App.css'
import './AboutPage.css'
import background from '../aboutbg.jpg'
import {motion} from 'framer-motion';
function AboutPage() {
    return (
        <>
        <div className="about-container">
            <img src={background} alt="background"/>
            <div className="about-block">
                <motion.div className="about-text"
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration:1}}>            
                <h1>About</h1>
                <h3>My Story</h3>
                <p>I am a new Launchcode graduate, ready to begin a new career in tech. My non-traditional background, sense of creativity, and management experience allow me to apply 
                    a unique perspective to my work as a programmer. I am passionate about learning new skills and growing my current skillset.
                </p>
            </motion.div>
            </div>
        </div>

    </>

    )
}

export default AboutPage
            {/* <div className="education-container">
                <h3>Education</h3>
                    <ul>
                        <li>
                            <p>Bachelor's Degree in Political Science</p>
                            <p>University of Missouri - Saint Louis</p>
                            <p>Graduated Winter 2018</p>
                        </li>
                    </ul>
            </div> */}