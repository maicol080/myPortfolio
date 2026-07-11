import { motion } from "framer-motion";

function Hero(){

    return(

        <section id="home" className="hero">


            <motion.div

                className="hero-content"

                initial={{
                    opacity:0,
                    y:30
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.8
                }}

            >


                <p className="hero-subtitle">
                    Frontend Developer
                </p>


                <h1>
                    Michele Scimonelli
                </h1>


                <p className="hero-text">

                    Creo esperienze web moderne con React,
                    design pulito e codice strutturato.

                </p>



                <div className="hero-buttons">


                    <a href="#projects">
                        View Projects
                    </a>


                    <a href="#contact">
                        Contact
                    </a>


                </div>


            </motion.div>


        </section>

    );

}


export default Hero;