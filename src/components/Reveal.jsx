import { motion } from "framer-motion";
import { useEffect, useState } from "react";


function Reveal({ children, delay = 0 }) {

    const [visible, setVisible] = useState(false);


    useEffect(() => {

        const timer = setTimeout(() => {
            setVisible(true);
        }, 100);


        return () => clearTimeout(timer);

    }, []);



    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 40
            }}

            animate={visible ? {

                opacity: 1,
                y: 0

            } : {}}


            transition={{

                duration: 0.7,
                delay

            }}


        >

            {children}

        </motion.div>

    );

}


export default Reveal;