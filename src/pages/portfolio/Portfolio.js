import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import SectionTitle from '../../utils/SectionTitle'
import './Portfolio.css'
import data from '../../utils/resumeData'

const Portfolio = () => {

    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);   
    
    return (
        <Grid container spacing={1} className='section pb-45 pt-45'>
            {/* Title */}
            <SectionTitle className='mb-20' title = 'Portfolio'/>

             {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} indicatorColor='white' className='custom-tabs' onChange={(event, newValue) => setTabValue((newValue))}>
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'custom-tabs-item active' : 'custom-tabs-item'} />
                                        
                    {[...new Set(data.projects.map(item => item.tag))].map(tag =>(
                        <Tab label={tag} value={tag} className={tabValue === tag ? 'custom-tabs-item active' : 'custom-tabs-item'}/>
                    )) }
                    
                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                        {data.projects.map(project => (
                            <>
                            {tabValue === project.tag || tabValue === 'All' ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeline={1000}>
                                        <Card className='custom-card' onClick = {()=> setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className='custom-card-img' image={project.image} title={project.title}/>
                                                <CardContent>
                                                    <Typography variant='body2' className='custom-card-title'>{project.title}</Typography>
                                                    <Typography variant='body3' className='custom-card-caption'>{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>                                
                                </Grid>
                            ) : null}                            
                            </>                            
                        ))}
                </Grid>
            </Grid>

            <Dialog  className='project-dialog' open={projectDialog} onClose={() => setProjectDialog(false)} fullWidth maxWidth='sm' >
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                <img src={projectDialog.image} alt="" className='project-dialog-img' />
                <DialogContent>
                    <Typography className='project-dialog-description'>
                        {projectDialog.description}
                    </Typography>                   
                </DialogContent>
                <DialogActions className='project-dialog-actions' >
                    {projectDialog?.links?.map(link => (
                        <a href={link.link} rel="noreferrer" target='_blank' className='project-dialog-icon'>{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Portfolio
