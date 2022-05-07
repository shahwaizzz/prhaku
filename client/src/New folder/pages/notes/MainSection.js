import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {AiOutlineArrowRight} from 'react-icons/ai';

const MainSection = () => {
  return (
    <Container className='py-5 px-5'>
        <Row>
            <Col><h1 className='notes-font-style1 pb-3 section-heading' >Parhaaku Notes</h1></Col>
        </Row>
        <Row>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className='pt-5 section-heading'>SNC</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>Class 9</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>Class 10</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>TCS</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>ISSB</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>CSS</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>BA</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>BSC</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
            <Col md={4} className='pb-5'>
                <div className='notes-cls-div1 shadow'>
                    <div className='text-center notes-cls-inr-div py-3'>
                        <div className='py-1'></div>
                        <h1 className=' pt-5 section-heading'>MSC</h1>
                        <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default MainSection