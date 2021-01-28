import React from 'react';

import { GitHub, Twitter, LinkedIn, WebOutlined, SettingsEthernet } from "@material-ui/icons";
import { Icon } from '@iconify/react';
import discordIcon from '@iconify/icons-simple-icons/discord';


export default {
    name : 'Kilian Agboton',
    title : 'Software developer',
    about : 
        "As a software developer, I particularly like web development in Java with the Spring Boot framework and the React JS library for the design of APIs and the creation of user-friendly interfaces. With the aim of providing a continuous quality of service, my combined experiences in networking and software development can emulate a DevOps approach, allowing me to generate continuous integration of the production pipeline. \n\n I am open to others and use my passion and my critical mind to motivate and help people through my experiences. I am passionate about sport and I want to Discover and Share new innovative stuffs.",
    email : 'kilian.agboton@gmail.com',
    skype: 'agbotonstefane',

    socials : {
        Twitter: {
            link: '#',
            text: 'Twiter',
            icon: <Twitter />
        },
        Discord: {
            link: '#',
            text: 'Kilian#9753',
            icon: <Icon icon={discordIcon} />
        } ,      
        Github:{
            link: 'https://github.com/kagboton',
            text: 'kagboton',
            icon: <GitHub />
        }, 
        LinkedIn: {
            link: 'https://www.linkedin.com/in/kilian-agboton/',
            text: 'LinkedIn',
            icon: <LinkedIn />
        }
        
    },

    experiences : [
        {
            title : "Web developer",
            date : "Jan 2020 - Present",
            description : "Design and create website from scratch or by using a content management system (Joomla, WordPress). Assist the customers for the maintenance and troubleshooting of their websites."
        },
        {
            title : "Software Development Engineer",
            date : "Aug 2018 - Sep 2019",
            description : "Assisted the project manager, and contributed to the study and implementation of the company electronic document management (EDM) system with Autodesk VAULT."
        },
        {
            title : "Data Steward",
            date : "Nov 2017 - Feb 2018",
            description : "Worked on compliance and migration of essential customer data from the local database to the remote CX Platform, researching techniques for the use of database tools."
        },

    ], 

    educations : [
        {
            title : "Master’s Degree of Science in Business Informatics",
            date : "August 2019",
            description : "Université d’Orléans, Orléans (France)"
        }
    ], 

    services : [
        
        {
            title : 'Backend Development',
            description : 'With, Java, Spring, etc. (parler de la certification spring)',
            icon : <WebOutlined />
        },
        {
            title: 'Web Development',
            description: 'Parler de React JS, de wordpress etc. ',
            icon : <WebOutlined />
        },
        {
            title: 'Application Deployment',
            description: 'Parler de AWS certification et montrer me competence',
            icon : <SettingsEthernet />
        },
    ],

    skills : [
        {
            title : 'BACK-END', 
            description : [
                "Java",
                "Spring Framework",
                "Hibernate", 
                "Microservices"
            ]
        },
        {
            title : 'FRONT-END', 
            description : [
                "Javascript",
                "React JS",
                "Bootstrap",
                "Material UI"
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
            title : 'INFRASTRUCTURE', 
            description : [
                "Docker",
                "Kubernates",
            ]
        },
    ]

          
};