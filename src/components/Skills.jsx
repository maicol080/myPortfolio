import { 
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";

import { 
    SiVite,
    SiNodedotjs
} from "react-icons/si";

import Reveal from "./Reveal";

function Skills(){

    const frontend = [

        {
            name:"React",
            icon:<FaReact />,
            description:"Creazione di interfacce moderne e componenti riutilizzabili."
        },

        {
            name:"JavaScript",
            icon:<FaJs />,
            description:"Logica frontend e sviluppo di funzionalità dinamiche."
        },

        {
            name:"HTML",
            icon:<FaHtml5 />,
            description:"Struttura semantica e organizzazione delle pagine web."
        },

        {
            name:"CSS",
            icon:<FaCss3Alt />,
            description:"Design responsive e interfacce curate nei dettagli."
        }

    ];


    const tools = [

        {
            name:"Git",
            icon:<FaGitAlt />,
            description:"Gestione del codice e controllo versione."
        },

        {
            name:"GitHub",
            icon:<FaGithub />,
            description:"Repository e collaborazione sui progetti."
        },

        {
            name:"Vite",
            icon:<SiVite />,
            description:"Build veloce per applicazioni React."
        },

        {
            name:"Node.js",
            icon:<SiNodedotjs />,
            description:"Ambiente JavaScript lato sviluppo."
        }

    ];


    return(

        <section id="skills" className="section">


            <span>
                Skills
            </span>


            <h2>
                Tecnologie che utilizzo
            </h2>



            <div className="skills-container">


                <div className="skills-group">


                    <h3>
                        Frontend
                    </h3>


                    <div className="skills-grid">


                        {
                            frontend.map((skill)=>(

                                <Reveal delay={0.1}>
                                
                                <div 
                                    className="skill-card"
                                    key={skill.name}
                                >

                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>


                                    <h4>
                                        {skill.name}
                                    </h4>


                                    <p>
                                        {skill.description}
                                    </p>


                                </div>

                                </Reveal>

                            ))
                        }


                    </div>


                </div>




                <div className="skills-group">


                    <h3>
                        Tools
                    </h3>


                    <div className="skills-grid">


                        {
                            tools.map((skill)=>(

                                <Reveal delay={0.1}>

                                <div 
                                    className="skill-card"
                                    key={skill.name}
                                >

                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>


                                    <h4>
                                        {skill.name}
                                    </h4>


                                    <p>
                                        {skill.description}
                                    </p>


                                </div>

                                </Reveal>

                            ))
                        }


                    </div>


                </div>


            </div>


        </section>

    );

}


export default Skills;