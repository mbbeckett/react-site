import React from 'react'
import '../App.css'
import './ContactPage.css'
import resumeImg from '../resume-img.JPG';

function ContactPage() {
    
    return (
    <>
        <div className="container">
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={resumeImg} alt="card"/>
                    </div>
                </div>
            </div>
        </div>

                {/* <div className="card">
                    <img src={resumeImg} alt="Madeline"></img>
                        <div className="container">
                            <p>Get in touch!</p>
                        </div>
                </div> */}

        {/* <div className="contact-container">
            <div className="image-container">
                <div className="img-card">
                    <img src={resumeImg} alt="card"></img>
                </div>
            </div>
            <h1>Contact</h1>
                <div className="contact-links"> 
                    <a href="https://linkedin.com/in/madelinebeckett"><i class="fab fa-linkedin-in"></i>  LinkedIn</a>
                    <a href="https://github.com/mbbeckett"><i class="fab fa-github"></i>Github</a>
                </div>
        </div> */}
    </>
    )
}

export default ContactPage
