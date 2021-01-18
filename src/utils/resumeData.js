import React from 'react';

import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";
import { Icon, InlineIcon } from '@iconify/react';
import discordIcon from '@iconify/icons-simple-icons/discord';


export default {
    name : 'Kilian Agboton',
    title : 'Web developer',
    
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
        
    }
}