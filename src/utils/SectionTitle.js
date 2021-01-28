import React from 'react'
import { Grid } from '@material-ui/core'

const SectionTitle = ({title}) => {
    return (
        <Grid item className='section-title mb-30'>
            <span></span>
            <h6 className='section-title-text'>{title}</h6>
        </Grid>
    )
}

export default SectionTitle
