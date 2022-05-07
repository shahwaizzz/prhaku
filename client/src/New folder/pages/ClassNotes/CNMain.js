import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chap1 from '../../img/icons/chap1.png';
import chap2 from '../../img/icons/chap2.png';
import {AiOutlineMinus} from 'react-icons/ai';

const CNMain = () => {
    const [tog1, setTog1] = useState(false);
    const [tog2, setTog2] = useState(false);

  return (
    <Container fluid className='py-5 px-5'>
        <Row>
            <Col>
                <h1 className='pt-2 section-heading'>Chapter Wise Notes and Other Learning Materials</h1>
                <p className='fnt-18 pb-4'>Class Notes according to updated syllabus. Contains solved exercises, review questions, MCQs, 
                    important board questions and chapter overview.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={9} xs={8}>
                <div className='collapse-div'>
                    <div className='coll-div-hdr1'><img src={chap1} width='95px' alt='logo' /><b className='l-b px-5'>Chapter Name {tog1?(<button className='plus-btn3' onClick={()=> setTog1(false)}><b>-</b></button>):(<button onClick={()=> setTog1(true)} className='plus-btn'><b>+</b> </button>)} </b></div>
                    {tog1&&(<div className='coll-div-bdy'>
                        <div className='coll-body-ldiv'>
                            <h5>Exersice</h5>
                            <h5>Short Question</h5>
                        </div>
                        <div className='coll-body-ldiv'>
                            <h5>MCQS Bank</h5>
                            <h5>Exersice Question</h5>
                        </div>
                    </div>)}
                </div>
                <div className='collapse-div my-3'>
                    <div className='coll-div-hdr1'><img src={chap2} width='95px' height='90px' alt='logo' /><b className='l-b px-5'>Chapter Name {tog2?(<button className='plus-btn2' onClick={()=> setTog2(false)}><b>-</b></button>):(<button onClick={()=> setTog2(true)} className='plus-btn'><b>+</b> </button>)} </b></div>
                    {tog2&&(<div className='coll-div-bdy'>
                        <div className='coll-body-ldiv'>
                            <h5>Exersice</h5>
                            <h5>Short Question</h5>
                        </div>
                        <div className='coll-body-ldiv'>
                            <h5>MCQS Bank</h5>
                            <h5>Exersice Question</h5>
                        </div>
                    </div>)}
                </div>
            </Col>
            <Col md={3} xs={4}>
                <div className='side-advert1'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='my-4 horizontal-advert py-3'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default CNMain