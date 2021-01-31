import React from 'react'
import {Button} from '@material-ui/core'
import './Button.css'

const CustomButton = ({text, icon, url}) => {
    return (
        <Button
            href={url} 
            className='custom-btn' 
            endIcon={icon ? <div className="btn-icon-container">{icon}</div> : null  }>
            <span className='btn-text'>{text}</span>
        </Button>
    )
}

export default CustomButton
