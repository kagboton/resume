import React from 'react';
import { Typography } from '@material-ui/core';

import profileImage from '../../assets/images/displayImage.jpg';
import CustomTimeline, {CustomTimelineSeparator} from '../timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import data from '../../utils/resumeData';
import resume from '../../assets/files/Agboton _Kilian_Resume.pdf'

import './Profile.css';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem'

import CustomButton from '../button/Button';
import { GetApp } from '@material-ui/icons';


const Profile = () => {
    return (
        <div className='profile container-shadow'>
            <div className='profile-name' >
                <Typography className='name'>{data.name}</Typography>
                <Typography className='title'>{data.title}</Typography>
            </div>

            <figure className='profile-image'>
                <img src={profileImage} alt='' />
            </figure>

            <div className='profile-info' >
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
               
                    <CustomTimelineItem title="Name" text={data.name}/>               
                    <CustomTimelineItem title="Title" text={data.title}/>
                    <CustomTimelineItem title="Email" text={data.email}/>

                    {Object.keys(data.socials).map(key => (
                        <CustomTimelineItem title={key} text={data.socials[key].text} link={data.socials[key].link}/>
                    ))}
                </CustomTimeline>
                
                <div className='btn-container'>
                    <a href={resume} rel="noreferrer" target="_blank">
                        <CustomButton text='Download CV' icon={<GetApp />}/>
                    </a>
                    
                </div>   
                
            </div>
        </div>
    );
}
const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline-content'>
            
            {link ? (
                <Typography className='timeline-item-text'><span>{title}</span>: <a href={link} rel="noreferrer" target='_blank'>{text}</a></Typography>
                ) : (
                <Typography className='timeline-item-text'><span>{title}:</span> {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

export default Profile;

