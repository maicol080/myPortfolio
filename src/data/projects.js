import oasiPreview from "../assets/previewOasiPizzeria.png";
import focusFlowPreview from "../assets/previewFocusFlow.png";
import barberAtelierPreview from "../assets/previewBarberAtelier.png";
import pusanePreview from "../assets/previewPusane.png";

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

    },

    {

        number:"03",

        category:"Business Website",

        title:"Barber Atelier",

        image:barberAtelierPreview,


        description:
        "Sito web vetrina premium progettato per una barberia moderna. Il progetto punta su un design elegante e immersivo per valorizzare il brand, i servizi e l'esperienza del cliente. Include sezioni dedicate alla filosofia del locale, servizi, gallery, team, contatti e un'interfaccia completamente responsive.",


        technologies:[
            "React",
            "Vite",
            "CSS",
            "Responsive Design",
            "React Components",
            "SEO Optimization"
        ],


        github:"https://github.com/maicol080/barber",

        live:"https://barber-atelier.vercel.app/"

    },

    {

        number:"04",

        category:"Business Website",

        title:"Pusané",

        image:pusanePreview,


        description:
        "Sito web vetrina premium sviluppato per un locale di street food pugliese. Il progetto è stato pensato per raccontare l'identità di Pusané attraverso un'esperienza digitale coinvolgente, mettendo in risalto i prodotti, la tradizione pugliese e l'atmosfera del locale. Include sezioni dedicate al menu, prodotti, storia, location, ordini e un design completamente responsive.",


        technologies:[
            "React",
            "Vite",
            "CSS",
            "Responsive Design",
            "Framer Motion",
            "SEO Optimization"
        ],


        github:"https://github.com/maicol080/pusane",

        live:"https://pusane.vercel.app"

    }

];


export default projects;