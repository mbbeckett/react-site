import React from 'react'
import '../App.css'
import './AboutPage.css'
import background from '../pink.jpg'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function AboutPage() {
    return (
        <>        
        <img src={background} alt="background"/>

        <div className="about-container">
        {/* <img src={background} alt="background"/> */}
            <div className="about-block">
                <motion.div className="about-text"
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration:1}}>            
                <h1>About</h1>
                <h3>My Story</h3>
                <p>
                    I am a new Launchcode graduate, ready to begin my career in tech. 
                    At LaunchCode, I learned foundational coding concepts to complete 
                    in-class projects by myself and on a team. My non-traditional background, 
                    sense of creativity, and management experience allow me to apply a unique 
                    perspective to my work as a programmer. I am passionate about learning new 
                    skills and technologies as well as growing my current skillset. I look forward 
                    to beginning the next chapter of my life as a full-stack web developer. 
                </p>
            </motion.div>
            </div>
            <Link to="/projects" className="btn">
                <i class="fas fa-arrow-right"></i>
            </Link>
        </div>

    </>

    )
}

export default AboutPage
           