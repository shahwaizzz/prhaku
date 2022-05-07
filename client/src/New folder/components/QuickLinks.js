import React,{ useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image2 from '../img/5999593.jpg';
import CollapseIcon from '../img/icons/collapse.png';
import downwardIcon from '../img/icons/download.png';
import {MdOutlineBook} from 'react-icons/md';
import {GiBookCover, GiBookAura} from 'react-icons/gi';
import {FaNewspaper} from 'react-icons/fa';



const QuickLinks = () => {

    const [tog1, setTog1] = useState(false);
    const [tog2, setTog2] = useState(false);
    const [tog3, setTog3] = useState(false);
    const [tog4, setTog4] = useState(false);
    const [tog5, setTog5] = useState(false);
    const [tog6, setTog6] = useState(false);
    const [tog7, setTog7] = useState(false);
    const [tog8, setTog8] = useState(false);
    const [tog9, setTog9] = useState(false);
    const [tog10, setTog10] = useState(false);
    const [tog11, setTog11] = useState(false);
    const [tog12, setTog12] = useState(false);
    const [tog13, setTog13] = useState(false);
    const [tog14, setTog14] = useState(false);
    const [tog15, setTog15] = useState(false);
    const [tog16, setTog16] = useState(false);
    const [tog17, setTog17] = useState(false);
    const [tog18, setTog18] = useState(false);
    const [tog19, setTog19] = useState(false);
    const [tog20, setTog20] = useState(false);
    const [tog21, setTog21] = useState(false);
    const [tog22, setTog22] = useState(false);

  return (
    <Container className="py-5 px-md-3 px-md-5 px-3" fluid style={{backgroundImage: `url(${Image2})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
        <h1 className='text-center pb-3 section-heading'>Quick Links</h1>
        <Container fluid>
            <Row>
                <Col md={6} className="py-3">
                    <div className='snc py-3 px-xl-5 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'>SNC</b> <b className='snc-hdr-txt'>SNC (Single National Curriculum) {tog1?(<button className='minus-link-btn' onClick={()=>setTog1(false)}><b>-</b></button>):(<button className='plus-link-btn' onClick={()=>setTog1(true)} ><b>+</b></button>)} </b></div>
                        {tog1&&(
                            <div className='snc-main'>
                            <div className='snc-main-inr'>
                                <h6>Class 1</h6>
                                <h6>Class 2</h6>
                                <h6>Class 3</h6>
                                <h6>Class 4</h6>
                            </div>
                            <div className='snc-main-inr'>
                                <h6>Class 5</h6>
                                <h6>Class 6</h6>
                                <h6>Class 7</h6>
                                <h6>Class 8</h6>
                            </div>
                        </div>
                        )}
                    </div>
                </Col>
                <Col md={6} className="py-3">
                    <div className='snc py-3 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'><MdOutlineBook size='.7cm' /></b> <b className='snc-hdr-txt '>e Books {tog2?(<button className='minus-link-btn' onClick={()=>setTog2(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog2(true)} ><b>+</b> </button>)} </b></div>
                        {tog2 && (
                            <div className='snc-main'>
                            <div className='snc-main-inr'>
                                <h6>SNC Books</h6>
                                <h6>Matric Books</h6>
                                <h6>Intermediate Books</h6>
                                <h6>Entry Test Books</h6>
                            </div>
                            <div className='snc-main-inr'>
                                <h6>Competative Books</h6>
                                <h6>Islamic Books</h6>
                                <h6>Urdu Novels</h6>
                                <h6>Others</h6>
                            </div>
                        </div>
                        )}
                    </div>
                </Col>
            </Row>
            <Row >
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'>css</b> <b className='snc-hdr-txt '>CSS {tog3?(<button className='minus-link-btn' onClick={()=>setTog3(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog3(true)} ><b>+</b> </button>)}</b></div>
                        {tog3 && (<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'><GiBookCover size="0.7cm" /></b> <b className='snc-hdr-txt '>Test Series {tog4?(<button className='minus-link-btn' onClick={()=>setTog4(false)}><b>-</b></button>):(<button className='plus-link-btn' onClick={()=>setTog4(true)} ><b>+</b> </button>)}</b></div>
                        {tog4 && (<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'><GiBookAura size="0.7cm" /></b> <b className='snc-hdr-txt '>Guess Paper {tog5?(<button className='minus-link-btn' onClick={()=>setTog5(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog5(true)} ><b>+</b> </button>)}</b></div>
                        {tog5 && (<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6> 
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)} 
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'><FaNewspaper size="0.7cm" /></b> <b className='snc-hdr-txt '>Past Paper {tog6?(<button className='minus-link-btn' onClick={()=>setTog6(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog6(true)} ><b>+</b> </button>)} </b></div>
                        {tog6 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
            </Row>
            <Row >
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo pbeb fnt-18 px-2'>9</b> <b className='snc-hdr-txt '>Class 9th {tog7?(<button className='minus-link-btn' onClick={()=>setTog7(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog7(true)} ><b>+</b> </button>)}</b></div>
                        {tog7 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Notes</h6>
                                <h6>Past Paper</h6>
                                <h6>Study Scheme</h6>
                                <h6>Guess Papers</h6>
                                <h6>Test Series</h6>
                                <h6>eBooks</h6>
                            </div>                            
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo pbeb'> 10</b> <b className='snc-hdr-txt '>Class 10th  {tog8?(<button className='minus-link-btn' onClick={()=>setTog8(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog8(true)} ><b>+</b> </button>)}</b></div>
                        {tog8 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Notes</h6>
                                <h6>Past Paper</h6>
                                <h6>Study Scheme</h6>
                                <h6>Guess Papers</h6>
                                <h6>Test Series</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo pbeb'> 11</b> <b className='snc-hdr-txt '>Class 11th {tog9?(<button className='minus-link-btn' onClick={()=>setTog9(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog9(true)} ><b>+</b> </button>)} </b></div>
                        {tog9 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Notes</h6>
                                <h6>Past Paper</h6>
                                <h6>Study Scheme</h6>
                                <h6>Guess Papers</h6>
                                <h6>Test Series</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3  px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo pbeb'> 12</b> <b className='snc-hdr-txt '>Class 12th {tog10?(<button className='minus-link-btn' onClick={()=>setTog10(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog10(true)} ><b>+</b> </button>)} </b></div>
                        {tog10 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Notes</h6>
                                <h6>Past Paper</h6>
                                <h6>Study Scheme</h6>
                                <h6>Guess Papers</h6>
                                <h6>Test Series</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> ADP</b> <b className='snc-hdr-txt '>ADP {tog11?(<button className='minus-link-btn' onClick={()=>setTog11(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog11(true)} ><b>+</b> </button>)} </b></div>
                        {tog11 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo mdcat'> MDCAT </b> <b className='snc-hdr-txt '>MDCAT {tog12?(<button className='minus-link-btn' onClick={()=>setTog12(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog12(true)} ><b>+</b> </button>)} </b></div>
                        {tog12 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> ECAT </b> <b className='snc-hdr-txt '>ECAT {tog13?(<button className='minus-link-btn' onClick={()=>setTog13(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog13(true)} ><b>+</b> </button>)} </b></div>
                        {tog13 &&(<div className='snc-mains'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> HAT </b> <b className='snc-hdr-txt2 '>HAT/GAT/NAT {tog14?(<button className='minus-link-btn' onClick={()=>setTog14(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog14(true)} ><b>+</b> </button>)} </b></div>
                        {tog14 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> LAT </b> <b className='snc-hdr-txt '>LAT {tog15?(<button className='minus-link-btn' onClick={()=>setTog15(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog15(true)} ><b>+</b> </button>)} </b></div>
                        {tog15 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> PPSC </b> <b className='snc-hdr-txt '>PPSC {tog16?(<button className='minus-link-btn' onClick={()=>setTog16(false)}><b>-</b> </button>):(<button className='plus-link-btn' ><b>+</b> </button>)} </b></div>
                        {tog16 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> ISSB </b> <b className='snc-hdr-txt '>ISSB {tog17?(<button className='minus-link-btn' onClick={()=>setTog17(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog17(true)} ><b>+</b> </button>)} </b></div>
                        {tog17 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> KKPS </b> <b className='snc-hdr-txt '>KKPS {tog18?(<button className='minus-link-btn' onClick={()=>setTog18(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog18(true)} ><b>+</b> </button>)} </b></div>
                        {tog18 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo mdcat'> SPPSC </b> <b className='snc-hdr-txt '>SPPSC {tog19?(<button className='minus-link-btn' onClick={()=>setTog19(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog19(true)} ><b>+</b> </button>)} </b></div>
                        {tog19 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> BPSC </b> <b className='snc-hdr-txt '>BPSC {tog20?(<button className='minus-link-btn' onClick={()=>setTog20(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog20(true)} ><b>+</b> </button>)} </b></div>
                        {tog20 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'> SPSC </b> <b className='snc-hdr-txt '>SPSC {tog21?(<button className='minus-link-btn' onClick={()=>setTog21(false)}><b>-</b></button>):(<button className='plus-link-btn' onClick={()=>setTog21(true)} ><b>+</b></button>)} </b></div>
                        {tog21 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
                <Col xxl={3} md={6} className="py-3">
                    <div className='snc2 py-3 px-xxl-4 px-lg-5 px-sm-4 px-3'>
                        <div className='snc-hdr text-white'><b className='snc-logo'>FPSC</b> <b className='snc-hdr-txt '>FPSC {tog22?(<button className='minus-link-btn' onClick={()=>setTog22(false)}><b>-</b> </button>):(<button className='plus-link-btn' onClick={()=>setTog22(true)} ><b>+</b> </button>)} </b></div>
                        {tog22 &&(<div className='snc-main'>
                            <div className='snc-main-inr2'>
                                <h6>Study Scheme</h6>
                                <h6>Past Paper</h6>
                                <h6>Notes</h6>
                                <h6>eBooks</h6>
                            </div>
                        </div>)}
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default QuickLinks