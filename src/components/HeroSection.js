import React from 'react'
import hero from '../pink.jpg';
import './HeroSection.css'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom';
function HeroSection() {
    return (
        
        <div
        className="hero-container">
            <img src={hero} alt="hero" />
            <motion.div className="hero-text"
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration:2}}>
                <h1>Madeline Beckett</h1>
                <p>Junior Web Developer</p>
            </motion.div>
            <Link to="/about" className="btn">
                <i class="fas fa-arrow-right"></i>
            </Link>
        </div>
    )
}

export default HeroSection
