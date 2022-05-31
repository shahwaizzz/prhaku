import React,{useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {AiOutlineArrowRight} from 'react-icons/ai';
import axios from 'axios';

const MainSection = () => {
    const [data, setData] = useState(null);
    const [uniClass, setUniClass] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/notes/").then((response) => {
            // setData(response.data.notes);
            const res = response.data.notes;
            console.log("Response : ", response.data);
            console.log("Response data : ", res);
            console.log("data : ", data);
            const uni = new Set(res.map((item => item)))
            console.log("uni data uni : ", uni );
            setUniClass([...uni]);
            console.log("uniClass uni class : ", uniClass)
            
            console.log("uniClass : ", uniClass);
        }).catch((error) => {
            console.log(error);
        })
    },[])
    
    return (
    <Container className='py-5 px-5'>
        <Row>
            <Col><h1 className='notes-font-style1 pb-3 section-heading' >Parhaaku Notes</h1></Col>
        </Row>
        <Row>
            {uniClass && uniClass.map((notes, index) => (
                <Col md={4} key={index} className='pb-5'>
                    <div className='notes-cls-div1 shadow'>
                        <div className='text-center notes-cls-inr-div py-3'>
                            <div className='py-1'></div>
                            <h1 className='pt-5 section-heading'>{notes.class}</h1>
                            <Button variant="dark my-5">View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                        </div>
                    </div>
                </Col>                
            ))}
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