import projects from "../data/projects";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Reveal from "./Reveal";

function Projects(){


    return(

        <section id="projects" className="section">


            <span>
                Portfolio
            </span>


            <h2>
                Progetti selezionati
            </h2>



            <div className="projects">


                {
                    projects.map((project)=>(

                        <Reveal>


                        <article 
                            className="project-card"
                            key={project.title}
                        >


                            <img
                                src={project.image}
                                alt={project.title}
                            />



                            <div className="project-content">


                                <div className="project-header">


                                    <span>
                                        {project.number}
                                    </span>


                                    <p>
                                        {project.category}
                                    </p>


                                </div>



                                <h3>
                                    {project.title}
                                </h3>



                                <p className="project-description">

                                    {project.description}

                                </p>



                                <div className="tech">


                                    {
                                        project.technologies.map((tech)=>(

                                            <small key={tech}>
                                                {tech}
                                            </small>

                                        ))
                                    }


                                </div>



                                <div className="project-links">


                                    <a href={project.github}>

                                        <FaGithub />

                                        GitHub

                                    </a>



                                    <a href={project.live}>

                                        <FiExternalLink />

                                        Live

                                    </a>


                                </div>


                            </div>


                        </article>

                        </Reveal>


                    ))
                }


            </div>


        </section>

    );

}


export default Projects;