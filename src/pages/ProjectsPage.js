import React from 'react'
import '../App.css'
import './ProjectsPage.css'
import {motion} from 'framer-motion'
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
                    <ul>
                        <li>
                            A portfolio I am currently building. It will eventually contain links to my other
                            projects, and document what I am currently learning.
                        </li>
                        <li>
                            Built with React, JavaScript, HTML, CSS
                        </li>
                        <li>
                            This is my first project built with React. I am gradually incorporating new features as I learn.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectsPage
