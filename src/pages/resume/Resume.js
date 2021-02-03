import { Grid, Icon, Paper, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import React from 'react'
import './Resume.css'
import data from '../../utils/resumeData'
import SectionTitle from '../../utils/SectionTitle'
import CustomTimeline, {CustomTimelineSeparator} from '../../components/timeline/Timeline';
import { School, Work } from '@material-ui/icons'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot'
import CustomButton from '../../components/button/Button'
import emailjs from 'emailjs-com';
import { Alert } from '@material-ui/lab'

import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const Resume = () => {

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [alertSeverity, setAlertSeverity] = React.useState("");

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("service_5np9hgw", 'template_ow5iqej', e.target, "user_Z1KQ0PTCfdcv3lisOYtwl")
          .then((result) => { 
            setAlertSeverity("success")
            setMessage("Message successfully submitted")   
            setOpen(true);
          }, (error) => {
            setAlertSeverity("error")
            setMessage("There is an error processing the form") 
            setOpen(true);
          });

          e.target.reset()
      }
    

    return (
        <>
        
            {/* About me */}
            <Grid container className='section pb-45 pt-45'>
                <SectionTitle title = 'About me'/>
                <Grid item  xs={12} >
                    <Typography variant='body2' className='about-text'>{data.about}</Typography>
                </Grid>
            </Grid>

            {/* Education and Experience */}
            <Grid container className='section pb-45'>
                <SectionTitle title = 'Resume'/>
                <Grid item xs={12}>
                    <Grid container className='resume-timeline'>
                        {/* Experience*/}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Experience" icon={<Work/>}>{data.experiences.map(experience => (
                                <TimelineItem>
                                    <CustomTimelineSeparator />                              
                                    <TimelineContent className='timeline-content'>
                                        <Typography className='timeline-title'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timeline-description' >{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}</CustomTimeline>
                        </Grid>
                        {/* Education*/}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Education" icon={<School />}>{data.educations.map(education => (
                                <TimelineItem>
                                    <CustomTimelineSeparator />                              
                                    <TimelineContent className='timeline-content'>
                                        <Typography className='timeline-title'>{education.title}</Typography>
                                        <Typography variant='caption' className='timeline-date'>{education.date}</Typography>
                                        <Typography variant='body2' className='timeline-description' >{education.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}</CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>  
                              
            </Grid>

            {/* Services */}
            <Grid container className='section pb-45'>
                <SectionTitle title = 'Services'/>     
                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>

                        {data.services.map(service => (
                            <Grid item sm={12} sm={6} md={3}>
                                <div className='service'>
                                    <Icon className='service-icon'>{service.icon}</Icon>
                                    <Typography className='service-title' variant='h6'>{service.title}</Typography>
                                    <Typography className='service-description' variant='body2'>{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}                        
                        
                    </Grid>
                </Grid>   
            </Grid>


            {/* Skills */}
            <Grid container  className='section gray-bg pb-45 p-50'>
                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={3}>
                    {data.skills.map(skill => (
                    <Grid item xs={12} sm={6} md={3}  >
                        <Paper elevation={0} className='skill'>
                            <Typography variant='h6' className='skill-title'>{skill.title}</Typography>
                            {skill.description.map(el => (
                                <Typography variant='body2'className='skill-description' >
                                       <TimelineDot variant={'outlined'} className='timeline-dot'/>
                                       {el}                                
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
                
                    </Grid>
                </Grid>
                
            </Grid>

            {/* Contact */}           
            <Grid container className='section pb-45' spacing={6}>  
                {/* Alert component */}
                <Grid item xs={12} lg={7}>
                    <Collapse in={open}>
                        <Alert
                            severity = {alertSeverity}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                        {message}
                        </Alert>
                    </Collapse>
                </Grid>
               
                {/* Contact form */}
                <Grid item xs={12} lg={7}>
                
                    <Grid container >
                        <SectionTitle title = 'Contact Form'/>                                
                    </Grid>

                    <form className="contact-form" onSubmit={sendEmail} xs={12}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}><TextField fullWidth required type='text' name='name' label='Name' /></Grid>    
                            <Grid item xs={12} sm={6}><TextField fullWidth required type='email' name='email' label='Email' /></Grid>
                            <Grid item xs={12} ><TextField fullWidth required type='text' name='message' label='Message' multiline rows={4}/></Grid>
                            <Grid item xs={12} ><CustomButton buttonType='submit' text='Submit' onclik={sendEmail} /></Grid>                            
                        </Grid>
                        
                    </form>
                </Grid>

                {/* Contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid container >
                        <SectionTitle title = 'Contact Information'/>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className='contact-info-item'>
                                        <span>Address: </span> {data.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contact-info-item'>
                                        <span>Email: </span> {data.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contact-info-item'>
                                        <span>Skype: </span> {data.skype}
                                    </Typography>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className='contact-info-socials-container' >
                                {Object.keys(data.socials).map(key => (
                                    <Grid item className='contact-info-social'>
                                        <a href={data.socials[key].link}>{data.socials[key].icon}</a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
       
            
       
        </>
       
    )
}

export default Resume
