import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {BiSearchAlt2} from 'react-icons/bi';

const Papers = (props) => {
    const {paper, setPaper} = props;
    let a,b,c;
    if(paper === 0){
        a= {color: 'black', borderBottom: '4px solid black'};
        b=null;
        c=null;
    }
    else if(paper === 1){
        b= {color: 'black', borderBottom: '4px solid black'};
        a=null;
        c=null;        
    }
    else{
        c= {color: 'black', borderBottom: '4px solid black'};
        a=null;
        b=null;        
    }
  return (
    <Container className='pt-5'>
        <Row>
            <Col>
                <h1 className='p-heading'>Download the updated Past Papers, Guess Papers and Test Series
                     for the best exam preparation.
                </h1>
                <div className='p-tog-div'>
                    <button style={c} className='paper-tog-btn' onClick={() => setPaper(2)}>Past Paper</button>
                    <button style={b} className='paper-tog-btn mx-5' onClick={() => setPaper(1)}>Guess Paper</button>
                    <button style={a} className='paper-tog-btn' onClick={() => setPaper(0)} >Test Series</button>
                </div>
                <div className='search-cover mt-4'>
                    <div className='search-div'>
                        <Form.Select  style={{display: 'inline-block', width: '210px'}} aria-label="Default select example">
                            <option>Select <b>Board/University</b> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select className='mx-3' style={{display: 'inline-block', width: '160px'}} aria-label="Default select example">
                            <option>Select <b>Class</b> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select style={{display: 'inline-block', width: '160px'}} aria-label="Default select example">
                            <option>Select <b>Subject</b> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select className='mx-3' style={{display: 'inline-block', width: '160px'}} aria-label="Default select example">
                            <option>Select <b>Year</b> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="warning mx-3"> <b className='px-2'>Search</b> <BiSearchAlt2 size='0.6cm' /> </Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Papers