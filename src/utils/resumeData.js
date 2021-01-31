import React from 'react';

import { GitHub, Twitter, LinkedIn, WebOutlined, SettingsEthernet, YouTube, Language } from "@material-ui/icons";
import { Icon } from '@iconify/react';
//import discordIcon from '@iconify/icons-simple-icons/discord';
import amazonAws from '@iconify/icons-cib/amazon-aws';
import codeIcon from '@iconify/icons-bi/code';

export default {
    name : 'Kilian Agboton',
    title : 'Software developer',
    address: '756 newmarket lane, Kingston, ON',    
    about : 
        "Hi, my name is Kilian and I'm a software developer. \n\n As a developer, I particularly like web development in Java with the Spring framework and the React JS library for the design of APIs and the creation of user-friendly interfaces. With the aim of providing a continuous quality of service, my combined experiences in networking and software development can emulate a DevOps approach, allowing me to generate continuous integration of the production pipeline. \n\n I am open to others and use my passion and my critical mind to motivate and help people through my experiences. I am passionate about sport and I want to Discover and Share new innovative stuffs.",
    email : 'kilian.agboton@gmail.com',
    skype: 'agbotonstefane',

    socials : {
        LinkedIn: {
            link: 'https://www.linkedin.com/in/kilian-agboton/',
            text: 'LinkedIn',
            icon: <LinkedIn />
        },        
        Twitter: {
            link: 'https://twitter.com/kiliango',
            text: 'Twiter',
            icon: <Twitter />
        },
        // Discord: {
        //     link: '#',
        //     text: 'Kilian#9753',
        //     icon: <Icon icon={discordIcon} />
        // } ,      
        Github:{
            link: 'https://github.com/kagboton',
            text: 'kagboton',
            icon: <GitHub />
        }, 
       
        
    },

    experiences : [
        {
            title : "Web developer",
            date : "Jan 2020 - Present, Website Design Kingston (Canada)",
            description : "Design and create website from scratch or by using a content management system (Joomla, WordPress). Assist the customers for the maintenance and troubleshooting of their websites."
        },
        {
            title : "Software Development Engineer",
            date : "Aug 2018 - Sep 2019, Alstef Automation (France)",
            description : "Assisted the project manager, and contributed to the study and implementation of the company electronic document management (EDM) system with Autodesk VAULT."
        },
        {
            title : "Web developer",
            date : "Apr 2016 - Jul 2016, Group Renault (France)",
            description : "Designed and developed a database and a web application for the management of HMI data from vehicles."
        },

    ], 

    educations : [
        {
            title : "Master’s Degree of Science in Business Informatics",
            date : "August 2019",
            description : "Université d’Orléans, Orléans (France)"
        },
        {
            title : "Bachelor Degree of Science in Business Informatics",
            date : "August 2016",
            description : "Université d’Orléans, Orléans (France)"
        }
    ], 

    services : [
        
        {
            title : 'Backend Development',
            description : "Experience creating RESTful APIs - Knowledge in microservices",
            icon : <Icon icon={codeIcon} />
        },
        {
            title: 'Web Development',
            description: 'Knowledge in ReactJS frontend library',
            icon : <WebOutlined />
        },
        {
            title: 'Application Deployment',
            description: 'Experience with Linux/Unix - Preparing AWS Certified Developer - Associate',
            icon : <Icon icon={amazonAws} />
        },
    ],

    skills : [
        {
            title : 'BACK-END', 
            description : [
                "Java 8+",
                "Spring Framework",
                "Hibernate", 
                "Microservices"
            ]
        },
        {
            title : 'FRONT-END', 
            description : [
                "React JS",
                "Material UI",
                "Bootstrap",                
                "Wordpress/Joomla"
            ]
        },
        {
            title : 'DATABASES', 
            description : [
                "Firebase",
                "MS SQL Server",
                "MySQL",
                "MongoDB"
            ]
        },
        {
            title : 'SOURCE CONTROL', 
            description : [
                "Git",
                "Github",
                "Gitlab",
            ]
        },
        {
            title : 'DEPLOIEMENT', 
            description : [
                "Docker",
                "Kubernates",
                "Gitlab CI"
            ]
        },
    ],

    projects : [
        {
            tag: 'React',
            image: 'https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg',
            title: 'Kilian Agboton Resume Website',
            description: "This project goal is to create my resume website using ReactJS library. It's a clone idea from a Wordpress template made by tavonline. This project allows me to practice React JS. More projects coming ... ",
            caption: 'React website',
            links : [
                { link:'https://github.com/kagboton/resume', icon: <GitHub /> },
            ]

        },
        {
            tag: 'Java',
            image: 'https://image.freepik.com/free-vector/api-application-program-interface_9233-249.jpg',
            title: 'Covid-19 API',
            description: 'This is a Restful API that provides Covid-19 statistics of countries all over the world. I collected the COVID-19 data from various sources, normalize them, and then provide it all as an easy to use API. This project was created with the spring framework and deployed using a micro-services architecture.',
            caption: 'My personal Restful API',
            links : [                
                { link:'https://github.com/kagboton/covid-19', icon: <GitHub /> },
            ]

        },
        {
            tag: 'Java',
            image: "https://image.freepik.com/free-vector/people-holding-connected-copy-space-circle-icons_53876-64681.jpg",
            title: 'Event Planner',
            description: 'The goal of this project is to design an event organization system in a social network, deployed using a micro-services architecture. The application allows a set of users, registered on the network, to participate in a party proposed by another user.',
            caption: 'A social network web application',
            links : [
                
                { link:'https://github.com/kagboton/groupeG', icon: <GitHub /> },
            ]

        },
        
    ]

          
};