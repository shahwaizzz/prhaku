import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

const NotesSlider = () => {
  return (
    <Container fluid>
        <Row>
            <Col md={6} className='l-col-divnotes' >
                <div className='l-divnotes p-md-5 p-4'>
                    <div className='px-md-5'>
                        <h1 className='notes-slid-heading pt-md-5 pt-3'>PARHAAKU <br /> NOTES SERIES</h1>
                        <p className='text-white py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta assumenda perspiciatis, numquam exercitationem error consequuntur vitae odit quo omnis beatae, blanditiis dolorem voluptatum similique consequatur quod sint id repellat magnam labore!</p>
                        {/* <InputGroup className="mb-3" style={{backgroundColor: 'none',opacity: '1',border: 'none'}}>
                            <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className='search-bar-notes'
                            />
                            <Button variant="dark" className='bg-dark-btn' id="button-addon2">
                            <FaSearch/>
                            </Button>
                        </InputGroup> */}
                    </div>                    
                </div>
            </Col>
            <Col md={6} className='r-col-divnotes'></Col>
        </Row>
    </Container>
  )
}

export default NotesSlider