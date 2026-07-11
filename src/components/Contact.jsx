import { FaGithub, FaEnvelope } from "react-icons/fa";


function Contact(){

    return(

        <section id="contact" className="section contact">


            <span>
                Contact
            </span>


            <h2>
                Hai un progetto in mente?
            </h2>



            <div className="contact-content">


                <p>

                    Sono disponibile per collaborazioni,
                    progetti web e nuove opportunità.

                    Se vuoi creare qualcosa insieme,
                    sentiti libero di contattarmi.

                </p>



                <div className="contact-links">


                    <a href="mailto:michelescimonelli@gmail.com">

                        <FaEnvelope />

                        Email

                    </a>



                    <a 
                        href="https://github.com/maicol080"
                        target="_blank"
                    >

                        <FaGithub />

                        GitHub

                    </a>

                </div>


            </div>


        </section>

    );

}


export default Contact;