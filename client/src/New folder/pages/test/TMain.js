import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {GiBookCover} from 'react-icons/gi';


const TMain = () => {
  return (
    <Container fluid className='py-4 px-5'>
        <Row>
            <Col className='top-sec'>
                <h2>Chapter Wise, Quarter Wise, Half Book & Full Book</h2>
                <h1>Test Series</h1>
                <p>Success is never final. Keep testing and experimenting. For you to sure a complete Exam <br />
                    Prepration, we have created dedicated Test for you to go through and test your abilites 
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={10} xs={9}>
                <div className='sec-one my-5'>
                    <div className='sec-hdr1 my-3'>
                        <div className='sec-hdr1-icon'>
                            <GiBookCover color='black' size='0.9cm' />
                        </div>
                        <b className='sec-hdr-txt'>Chapter Wise Test Series</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Chapter 1 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Chapter 2 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Chapter 3 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Chapter 4 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Chapter 5 Test</b>
                    </div>
                </div>
                <div className='sec-one my-5'>
                    <div className='sec-hdr1 my-3'>
                        <div className='sec-hdr1-icon'>
                            <GiBookCover color='black' size='0.9cm' />
                        </div>
                        <b className='sec-hdr-txt'>Quarter Book Test Series</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Quarter 1 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Quarter 2 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Quarter 3 Test</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Quarter 4 Test</b>
                    </div>
                </div>
                <div className='sec-one my-5'>
                    <div className='sec-hdr1 my-3'>
                        <div className='sec-hdr1-icon'>
                            <GiBookCover color='black' size='0.9cm' />
                        </div>
                        <b className='sec-hdr-txt'>Half Book Test Series</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>First Half Book</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Second Half Book</b>
                    </div>
                </div>
                <div className='sec-one my-5'>
                    <div className='sec-hdr1 my-3'>
                        <div className='sec-hdr1-icon'>
                            <GiBookCover color='black' size='0.9cm' />
                        </div>
                        <b className='sec-hdr-txt'>Full Book Test Series</b>
                    </div>
                    <div className='test-link my-3'>
                        <b>Full Book Test</b>
                    </div>
                </div>
            </Col>
            <Col md={2} xs={3}>
                <div className='side-advert1'>
                    <h1>Advert</h1>
                </div>
                <div className='side-advert1'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='advert11'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default TMain