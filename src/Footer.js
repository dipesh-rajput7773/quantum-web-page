import React from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'

function Footer() {
  return (
   <section className='footer-sec'>
     <Container>
          <div className='footer-content'>
                <div className='footer-right'>
                    <h5>Subscribe Our Newsletter <br></br>
                    For More Update</h5>
                    <p>Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                </div>
                
          
           
            <div className='footer-left'>
                    <input type='email' placeholder='Enter Your Email'></input>
                <div className='button-hero'>
              <Button variant="primary" className='hero-btn mt-4'>Subscribe</Button>
           

              </div>

                </div>
                
                </div>
        
     </Container>
   </section>
  )
}

export default Footer