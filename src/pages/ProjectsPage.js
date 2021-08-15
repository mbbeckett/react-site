import React from 'react'
import '../App.css'
import './ProjectsPage.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
function ProjectsPage() {
    return (
        <div>
            <div className="projects-container">
                <motion.div className="projects-text"
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration:1}}>
                <h1>Projects</h1>
                <h3>My Website</h3>
                    <ul className="projects-list">
                        <li>
                            A responsive portfolio built with React, JavaScript, HTML, and CSS.<br/>
                            It will eventually contain links to my other projects, and document what I am learning.
                            This is my first project built with React. I am gradually incorporating new features as I learn.
                        </li>
                    </ul>
                </motion.div>
                <a href="https://github.com/mbbeckett">Find more of my projects on Github! <i class="fab fa-github"></i></a>
                <Link to="/contact" className="btn">
                <i class="fas fa-arrow-right"></i>
            </Link>
            </div>
        </div>
    )
}

export default ProjectsPage
