import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import light from '../../img/light.svg';
import TSeries from '../papers/TSeries';
import {FaDiceSix} from 'react-icons/fa';
import Comments from '../../components/Comments';


const SScheme = () => {
  return (
      <>
        <div className='ss-slid'>
            <h1 style={{display: 'inline-block'}}>Study Scheme </h1>
            <img src={light} alt="light" width='400px' />
        </div>
        <Container fluid className='px-5'>
            <Row>
                <Col md={10}>
                    <div className='ts-thead'>
                        <div className='ts-icon-div'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                        <div className='ts-thead-txt bg-warning'>Board Wise Past Paper</div>
                    </div> 
                    <div className='py-3'></div>
                    <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>9th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td>English Urdu MAth</td></tr>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>English</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>10th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td>English</td></tr>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>English</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>11th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td>English</td></tr>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>English</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>12th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='ts-thead'>
                        <div className='ts-thead-txt bg-warning'>Board Wise Past Paper</div>
                        <div className='ts-icon-div2'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                    </div> 
                    <div className='two-table-cover'>
                        <div className='table-div2'>
                            <table className='table1 table2'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>12th Class</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr><td>English</td></tr>
                                <tr><td>Urdu</td></tr>
                                <tr><td>Mathematics</td></tr>
                                <tr><td>Physics</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Pakistan Studies</td></tr>
                                <tr><td>Pakistan Studies</td></tr>
                                <tr><td>Chemistry</td></tr>
                                <tr><td>Civics</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='table-div2'>
                            <table className='table1 table2 tbl2-lft'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>12th Class</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr><td>English</td></tr>
                                <tr><td>Urdu</td></tr>
                                <tr><td>Mathematics</td></tr>
                                <tr><td>Physics</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Biology</td></tr>
                                <tr><td>Pakistan Studies</td></tr>
                                <tr><td>Pakistan Studies</td></tr>
                                <tr><td>Chemistry</td></tr>
                                <tr><td>Civics</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='vertical-advert'>
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
        <Comments />
    </>
  )
}

export default SScheme