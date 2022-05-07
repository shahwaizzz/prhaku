import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaDiceSix} from 'react-icons/fa';


const PPapers = () => {
  return (
    <Container fluid className='px-5'>
        <Row>
            <Col md={10}>
                <div className='ts-thead'>
                  <div className='ts-icon-div'>
                    <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                  </div>
                    <div className='ts-thead-txt bg-warning'>Board Wise Past Paper</div>
                </div> 
                <div className='py-4'></div>
                <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>Punjab All Boards</th>
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
                                <th style={{backgroundColor:'#0F9EFF'}}>KPK All Boards</th>
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
                                <th style={{backgroundColor:'#0F9EFF'}}>Sindh All Boards</th>
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
                                <th style={{backgroundColor:'#0F9EFF'}}>Blochistan All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            </tbody>
                        </table>
                        <table className='table1 mt-5'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>Blochistan All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='ts-thead'>
                        <div className='ts-thead-txt bg-warning'>University Wise Past Paper</div>
                        <div className='ts-icon-div2'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                    </div> 
                    <div className='two-table-cover'>
                        <div className='table-div3'>
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
                        
                    </div>
                    


                    <div className='ts-thead'>
                        <div className='ts-thead-txt bg-warning'>Category Wise Past Paper</div>
                        <div className='ts-icon-div2'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                    </div> 
                    <div className='two-table-cover'>
                        <div className='table-div2'>
                            <table className='table1 table2'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>Entry Test</th>
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
                                    <th style={{backgroundColor:'#0F9EFF'}}>Competitive Exams</th>
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
            <Col md={2} className='pt-5'>
              <div className='vertical-advert mt-5'> 
                <h1>Advert</h1>
              </div>
              <div className='vertical-advert mt-5'> 
                <h1>Advert</h1>
              </div>
              <div className='vertical-advert mt-5'> 
                <h1>Advert</h1>
              </div>
            </Col>
        </Row>
        <Row>
          <div className='advert11 mt-4'>
            <h1>Advert</h1>
          </div>
        </Row>
    </Container>
  )
}

export default PPapers