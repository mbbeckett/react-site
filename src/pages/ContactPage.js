import React from 'react'
import '../App.css'
import { motion } from 'framer-motion';
import background from "../pink.jpg"
import './ContactPage.css';

function ContactPage() {
    return(
        <>        
        <img src={background} alt="background"/>
        <div className="contact-container">
            <div className="contact-block">
                <motion.div className="contact-text"
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration:1}}>     
                        <h1>Contact</h1>       
                <p>
                    <a href="https://linkedin.com/in/madelinebeckett"><i class="fab fa-linkedin-in"></i>  LinkedIn</a>
                    <a href="https://github.com/mbbeckett"><i class="fab fa-github"></i> Github</a>
                </p>
                </motion.div>
            </div> 

        </div>

    </>
    )
}

export default ContactPage
