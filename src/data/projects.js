import oasiPreview from "../assets/previewOasiPizzeria.png";
import focusFlowPreview from "../assets/previewFocusFlow.png";

const projects = [

    {

        number:"01",

        category:"Web Development",

        title:"Oasi Pizzeria",

        image:oasiPreview,


        description:
        "Landing page moderna per una pizzeria italiana. Il progetto punta su un design elegante, responsive e una navigazione semplice per valorizzare il brand.",


        technologies:[
            "React",
            "Vite",
            "CSS"
        ],


        github:"https://github.com/maicol080/oasi-pizzeria",

        live:"https://oasi-pizzeria.vercel.app/"

    },

    {

        number:"02",

        category:"Web Development",

        title:"FocusFlow",

        image:focusFlowPreview,


        description:
        "Applicazione web di produttività progettata per organizzare attività e obiettivi personali. Include gestione avanzata delle task, calendario con scadenze, dashboard con statistiche, personalizzazione del tema e un'interfaccia responsive ottimizzata per desktop e mobile.",


        technologies:[
            "React",
            "Vite",
            "CSS",
            "React Router",
            "Context API",
            "Framer Motion",
            "LocalStorage"
        ],


        github:"https://github.com/maicol080/focusflow",

        live:"https://focusflowhub.vercel.app/"

    }

];


export default projects;