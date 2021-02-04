import React from 'react'
import { Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { withRouter } from "react-router";
import {  HomeRounded, Telegram } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

import data from '../../utils/resumeData';
import CustomButton from '../button/Button'
import './Header.css'

const Header = (props) => {
    const pathName = props?.location?.pathname
    return (
        <Navbar expand="lg" sticky='top' className='header'>
            {/* Home link */}
            <Nav.Link as={NavLink} to ='/' className='header-nav-link'>
               <Navbar.Brand className='header-home'> <HomeRounded /> </Navbar.Brand>
            </Nav.Link> 
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='header-left'>
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to ='/' className={pathName === '/' ? 'header-link-active' : 'header-link'}>Resume</Nav.Link>
                    {/* Portfolio link */}
                    <Nav.Link as={NavLink} to ='/portfolio' className={pathName === '/portfolio' ? 'header-link-active' : 'header-link'}>Portfolio</Nav.Link>
                </Nav>

                <div className='header-right'>
                    {Object.keys(data.socials).map(key => (
                        <a href={data.socials[key].link} target='_blank' rel="noreferrer"> {data.socials[key].icon}</a>
                    ))}

                    <CustomButton url={'mailto:kilian.agboton@gmail.com?subject=[YOUR RESUME]:'} text={'Hire me'} icon={<Telegram/>} />
                </div>

                
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default withRouter(Header);
