import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

function VideoSec() {
    return (
        <section className='video-sec'>
            <Container>
                <Row className='py-5'>
                    <Col md={6} lg={6}>
                        <div className='video-left'>
                            <h5>We Have Many Year Experience In  Consuntent Business</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus</p>
                            <div className='button-hero'>
                                <Button variant="primary" className='hero-btn'>Know More</Button>


                            </div>
                        </div>


                    </Col>
                    <Col md={6} lg={6}>
                        <div className='video-right '>
                            <span className='posistion'><img src="./play.png" alt="Image"  /></span>
                  
                            <div className="image-container">
                        

                                <img src="./wepik-export-20230725132620R0J6.png" alt="Image" />
                               
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className='text-center pb-5'>
                    <Col md={3}><div className='logo-sec'><SettingsSuggestOutlinedIcon /><br></br>
                    Construction</div></Col>
                    <Col md={3}><div className='logo-sec'><WbCloudyIcon /><br></br>DUMMY-LOGO</div></Col>
                    <Col md={3}><div className='logo-sec'><WbCloudyIcon /><br></br> RandomLogo</div></Col>
                    <Col md={3}><div className='logo-sec'><WbCloudyIcon /> <br></br> RandomBrand</div></Col>
              
                   
                </Row>
            </Container>

        </section>
    )
}

export default VideoSec