import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import data from '../../utils/resumeData'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <Typography className='footer-name'>{data.name}</Typography>
            </div>
            <div className='footer-right'>
                <Typography className='footer-copyright'>
                    Designed and Developed by <a href='#'>Kilian Agboton</a>
                    <br />
                    Clone idea from <a href='https://themeforest.net/user/tavonline' target='_blank'>tavonline</a>.
                </Typography>
            </div>
        </div>
    )
}

export default Footer
