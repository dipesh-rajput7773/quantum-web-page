import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Services() {
    return (
        <section className='services-sec'>
            <Container>
                <div className='text-center py-5'>
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>  amet, consectetur Sed non risus.</p>

                </div>

               
                  
                      <div className='cards'>
                      <div className='services-card'>
                            <img  src="./promotion.png" />
                            <div className='body'>
                            <h6 className='pt-3'>Financial Consulting</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum do elit.
                               
                                </p>
                            </div>
                          
                        </div>
                        <div className='services-card'>
                            <img  src="./promotion.png" />
                            <div className='body'>
                            <h6 className='pt-3'>Financial Consulting</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum do elit.
                               
                                </p>
                            </div>
                          
                        </div>
                        <div className='services-card'>
                            <img  src="./promotion.png" />
                            <div className='body'>
                                <h6 className='pt-3'>Financial Consulting</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum do elit.
                                
                                </p>
                            </div>
                          
                        </div>
                      </div>
                   
                    
                       
        
                   
                    <div className='button-hero text-center py-5'>
                        <Button variant="primary" type='submit' className='hero-btn'>Start Now</Button>
                  </div>
                

            </Container>
        </section>
    )
}

export default Services