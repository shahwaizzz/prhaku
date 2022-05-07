import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sliderImg from '../img/sliderimg.jpg';
import personIcon from '../img/icons/person.png';
import rewardIcon from '../img/icons/reward.png';

const SliderImage = () => {
    return(
        <div fluid style={{backgroundImage: `url(${sliderImg})`, width:'100%', backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} className="slider-bg-div">
        <div className='opacity-div'>
            <Container>
                <Row className='py-1'>
                    <Col className='pt-md-5 pt-sm-3 pt-3 pb-3'>
                        <h1 className='slidimg-heading'>Pakistan's <b className='text-white'>#1</b> <br /> e-Learning Hub</h1>
                        {/* <h1 className='slidimg-heading'>e-Learning Hub</h1> */}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 className='text-center why-par'> <b className='question'>  ?</b> Why Parhaaku?</h4>
                    </Col>
                </Row>
                
            </Container>
            <Container fluid >
                <Row className='pt-3 slid-card-cover'>
                    <Col md={4}>
                        <div className='slid-card'>
                            <img src={personIcon} width="50px" alt="icon" />
                            <p className='font-style1'>Personalized <br /> Learning</p>
                            <p className='font-style2'>Students can learn and practice at their own pace, first filling in gaps in their understanding and then</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='slid-card'>
                                <img src={rewardIcon} width="50px" alt="icon" />
                                <p className='font-style1'> Trusted <br /> Content</p>
                                <p className='font-style2'>Created by experts, Parhaaku's library is the most trusted platform to cover the content.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='slid-card'>
                                <img src={personIcon} width="50px" alt="icon" />
                                <p className='font-style1'>Empowered <br /> Teachers</p>
                                <p className='font-style2'>With Parhaaku's teachers can get help with our specialized content (video lectures, Notes, Tests)</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}
export default SliderImage;