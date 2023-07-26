import React from 'react'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function TopNav() {
  return (
  <section className='top-nav-sec'>
<Container>
    <div className='top-nav'>
        <div className='top-right d-flex'>
            <div className='border-left'> <TimerOutlinedIcon /> <a className='underline'>We are open 24/7</a></div>
            <div><EmailIcon /> <a> mail@gmai.com</a></div>
        </div>
        <div className='top-left'>
          <ul className='d-flex '>
            <li><a href='#Twitter'><TwitterIcon /></a></li>
            <li><a href='#Linkedin'><LinkedInIcon /></a></li>
            <li><a href='#facebook'><FacebookIcon /></a></li>
            <li><a href='#instagram'><InstagramIcon /></a></li>
         
           
           
          </ul>
        </div>
    </div>
</Container>

  </section>
  )
}

export default TopNav