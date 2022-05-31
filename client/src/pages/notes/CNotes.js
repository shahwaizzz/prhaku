import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from '../../img/icons/eng.png';
import logo2 from '../../img/icons/badshahi-mosque.png';
import logo3 from '../../img/icons/kaaba.png';
import logo4 from '../../img/icons/pakistan.png';
import logo5 from '../../img/icons/balance.png';
import logo6 from '../../img/icons/dna.png';
import logo7 from '../../img/icons/calculator.png';
import logo8 from '../../img/icons/pc.png';
import logo9 from '../../img/icons/science.png';
import logo10 from '../../img/icons/science.png';
import logo11 from '../../img/icons/book.png';
import logo12 from '../../img/icons/exercise.png';
import logo13 from '../../img/icons/design-tool.png';
import logo14 from '../../img/icons/carts.png';
import logo15 from '../../img/icons/economy.png';
import logo16 from '../../img/icons/accounts.png';
import axios from 'axios';


const CNotes = () => {
    


  return (
    <Container fluid className='py-5'>
        <Row>
            <Col md={2}>
                <div className='vertical-advert mt-5'>
                    <h1>Advert</h1>
                </div>
                <div className='vertical-advert'>
                    <h1>Advert</h1>
                </div>
            </Col>
            <Col md={8}>
                <h1 className='cn-font12 py-3'>All Subject Notes in PDF</h1>
                <div className='notes-subjects'>
                    <div className='subject-note-card sub-nc1'>
                        <img src={logo1} alt="logo" />
                        <h2 className='mt-4'>English</h2>
                    </div>
                    <div className='subject-note-card sub-nc2'>
                        <img src={logo2} alt="logo" />
                        <h2 className='mt-4'>Urdu</h2>
                    </div>
                    <div className='subject-note-card sub-nc3'>
                        <img src={logo3} alt="logo" />
                        <h2 className='mt-4'>Islamiyat</h2>
                        <b>( Compulsary )</b>
                    </div>
                    <div className='subject-note-card sub-nc4'>
                        <img src={logo4} alt="logo" />
                        <h2 className='mt-4'>Pakistan Studies</h2>
                    </div>
                    <div className='subject-note-card sub-nc10'>
                        <img src={logo5} alt="logo" />
                        <h2 className='mt-4'>Physics</h2>
                    </div>
                    <div className='subject-note-card sub-nc11'>
                        <img src={logo6} alt="logo" />
                        <h2 className='mt-4'>Biology</h2>
                    </div>
                    <div className='subject-note-card sub-nc12'>
                        <img src={logo7} alt="logo" />
                        <h2 className='mt-4'>Math</h2>
                    </div>
                    <div className='subject-note-card sub-nc13'>
                        <img src={logo8} alt="logo" />
                        <h2 className='mt-4'>Chemistry</h2>
                    </div>
                    <div className='subject-note-card sub-nc14'>
                        <img src={logo9} alt="logo" />
                        <h2 className='mt-4'>Computer Science</h2>
                    </div>
                    <div className='subject-note-card sub-nc15'>
                        <img src={logo10} alt="logo" />
                        <h2 className='mt-4'>Genral Science</h2>
                    </div>
                    <div className='subject-note-card sub-nc14'>
                        <img src={logo11} alt="logo" />
                        <h2 className='mt-4'>Education</h2>
                    </div>
                    <div className='subject-note-card sub-nc15'>
                        <img src={logo12} alt="logo" />
                        <h2 className='mt-4'>Physical Education</h2>
                    </div>
                    <div className='subject-note-card sub-nc17'>
                        <img src={logo13} alt="logo" />
                        <h2 className='mt-4'>Principles of Business Math</h2>
                    </div>
                    <div className='subject-note-card sub-nc16'>
                        <img src={logo14} alt="logo" />
                        <h2 className='mt-4'>Principles of Commerce</h2>
                    </div>
                    <div className='subject-note-card sub-nc17'>
                        <img src={logo15} alt="logo" />
                        <h2 className='mt-4'>Principles of Ecommerce</h2>
                    </div>
                    <div className='subject-note-card sub-nc3'>
                        <img src={logo3} alt="logo" />
                        <h2 className='mt-4'>Islamiyat</h2>
                        <b>Elective</b>
                    </div>
                    <div className='subject-note-card sub-nc17'>
                        <img src={logo16} alt="logo" />
                        <h2 className='mt-4'>Principles of Accounting</h2>
                    </div>
                </div>
            </Col>
            <Col>
                <div className='vertical-advert mt-5'>
                    <h1>Advert</h1>
                </div>
                <div className='vertical-advert'>
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

export default CNotes