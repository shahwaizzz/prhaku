import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import chap1 from '../../img/icons/chap1.png';
import {AiOutlineEye} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {FaShare} from 'react-icons/fa';


const PPMain = () => {
  return (
    <Container fluid className='py-5 px-5'>
        <Row>
            <Col>
                <h2 className='pt-2 font-style3 text-center pb-5'>Download the updated Class-Wise Past Papers <br /> for the best exam preparation.</h2>
            </Col>
        </Row>
        <Row>
            <Col md={9} xs={8}>
                <div className='subject-div my-4'>
                    <div className='coll-div-hdr'>
                        <div className='r-img-div'>
                            <img src={chap1} alt='logo' />
                        </div>
                        <div className='side-div py-2 px-5'>
                            <b>History</b>
                            <br />
                            <strong className='py-2'>Lorem ipsum dolor sit</strong>
                            <br />
                            <Button className='mt-2 py-1'><AiOutlineEye size="0.6cm" />  View</Button>
                        </div>
                        <div className='div-3rd'>
                            <h3><BsThreeDotsVertical /></h3>
                            <h2 className='pyear'>2018</h2>
                        </div>
                    </div>
                </div>
                <div className='subject-div my-4'> 
                    <div className='coll-div-hdr'>
                        <div className='r-img-div'>
                            <img src={chap1} alt='logo' />
                        </div>
                        <div className='side-div py-2 px-5'>
                            <b>Math</b>
                            <br />
                            <strong className='py-2'>Lorem ipsum dolor sit</strong>
                            <br />
                            <Button className='mt-2 py-1'><AiOutlineEye size="0.6cm" />  View</Button>
                        </div>
                        <div className='div-3rd'>
                            <h3><BsThreeDotsVertical /></h3>
                            <h2 className='pyear'>2018</h2>
                        </div>
                    </div>
                </div>
                <div className='subject-div my-4'>
                    <div className='coll-div-hdr'>
                        <div className='r-img-div'>
                            <img src={chap1} alt='logo' />
                        </div>
                        <div className='side-div py-2 px-5'>
                            <b>English</b>
                            <br />
                            <strong className='py-2'>Lorem ipsum dolor sit</strong>
                            <br />
                            <Button className='mt-2 py-1'><AiOutlineEye size="0.6cm" />  View</Button>
                        </div>
                        <div className='div-3rd'>
                            <h3><BsThreeDotsVertical /></h3>
                            <h2 className='pyear'>2018</h2>
                        </div>
                    </div>
                </div>
                <div className='subject-div my-4'>
                    <div className='coll-div-hdr'>
                        <div className='r-img-div'>
                            <img src={chap1} alt='logo' />
                        </div>
                        <div className='side-div py-2 px-5'>
                            <b>English</b>
                            <br />
                            <strong className='py-2'>Lorem ipsum dolor sit</strong>
                            <br />
                            <Button className='mt-2 py-1'><AiOutlineEye size="0.6cm" />  View</Button>
                        </div>
                        <div className='div-3rd'>
                            <h3><BsThreeDotsVertical /></h3>
                            <h2 className='pyear'>2018</h2>
                        </div>
                    </div>
                </div>
                <div className='subject-div my-4'>
                    <div className='coll-div-hdr'>
                        <div className='r-img-div'>
                            <img src={chap1} alt='logo' />
                        </div>
                        <div className='side-div py-2 px-5'>
                            <b>English</b>
                            <br />
                            <strong className='py-2'>Lorem ipsum dolor sit</strong>
                            <br />
                            <Button className='mt-2 py-1'><AiOutlineEye size="0.6cm" />  View</Button>
                        </div>
                        <div className='div-3rd'>
                            <h3><BsThreeDotsVertical /></h3>
                            <h2 className='pyear'>2018</h2>
                        </div>
                    </div>
                </div>
                
            </Col>
            <Col md={3} xs={4} className="pt-5">
                <div className='side-advert1'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='my-5 horizontal-advert py-3'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default PPMain