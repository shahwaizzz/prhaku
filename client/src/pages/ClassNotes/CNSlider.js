import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const CNSlider = () => {
  return (
    <Container fluid>
        <Row>
            <Col md={6} className='l-col-divnotes' >
                <div className='l-divnotes px-md-5 px-4 pt-md-1 pt-1'>
                    <div className='px-md-5 pt-md-5 mt-4'>
                        <h1 className='notes-slid-heading1 pt-md-3 pt-2'>PARHAAKU <br /> NOTES SERIES</h1>
                        <h1 className='notes-slid-heading pt-1'>CHAPTER WISE NOTES</h1>
                    </div>                    
                </div>
            </Col>
            <Col md={6} className='r-col-divnotes'></Col>
        </Row>
    </Container>
  )
}

export default CNSlider