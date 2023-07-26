import React from 'react'
import { Container, Row, Col, Button  } from 'react-bootstrap'

function HeroSection() {
    return (
        <section className='hero-sec'>
            <Container>
        <Row className='pt-5'>
            <Col md={6} lg={6} className='left-col'>
               <div className='hero-left '>
                 <div className='sub-heading'>
                    <h6> Build for Batter Future</h6>
                 </div>
                 <h1>We Are Consulting For Your  Business Finances </h1>
                 <p className='pera py-2'>
                Truly decentralised app that gives you the tools, inspiration,
                and support you need to become a better  investor.
              </p>
              <div className='button-hero'>
              <Button variant="primary" className='hero-btn'>Start Now</Button>
           

              </div>
             
               </div>
            </Col>
            <Col md={6} lg={6} className='text-end'>
                 <div className='hero-right'>
                    <div className='hero-img'>
                        <img src='./wepik-export-20230725142726jGAL.png'></img>
                    </div>
                 </div>
            </Col>
        </Row>
    </Container>
        </section>
    )
}

export default HeroSection