import Reveal from "./Reveal";

function About(){

    return(

        <Reveal>

        <section className="section about" id="about">


            <span>
                About me
            </span>


            <h2>
                Creo siti web con attenzione
                ai dettagli.
            </h2>



            <div className="about-content">


                <p>

                    Sono Michele, studente di informatica
                    e frontend developer.

                    Mi piace progettare interfacce moderne,
                    pulite e funzionali, trasformando idee
                    in esperienze web curate.

                </p>


                <p>

                    Lavoro principalmente con React,
                    JavaScript, HTML e CSS, cercando sempre
                    di creare progetti ordinati, responsive
                    e piacevoli da utilizzare.

                </p>


            </div>


        </section>

        </Reveal>

    );

}


export default About;