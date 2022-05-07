import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {BiSearchAlt2} from 'react-icons/bi';
import {AiOutlineDownload} from 'react-icons/ai';
import cover1 from '../../img/img1.jpg';

const EBMain = () => {
  return (
    <>  
    <Container className='py-5'>
        <Row>
            <Col>
                <h1 className='text-center eb-heading'>Browse a number e-Books for classes of SNC, Matric,<br /> Intermediate, Entry Tests, and Competitive <br /> Exams</h1>
                <div className='option-list'>
                    <ul>
                        <li>SNC</li>
                        <li>Matric</li>
                        <li>Intermediate</li>
                        <li>Entery Test</li>
                        <li>Competetive Exams</li>
                        <li>Islamic Books</li>
                        <li>Urdu Novels</li>
                        <li>More</li>
                    </ul>
                </div>
                <div className='search-cover'>
                    <div className='search-div'>
                        <Form.Select style={{display: 'inline-block', width: '160px'}} aria-label="Default select example">
                            <option>Select <b>Class</b> </option>
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
    <Container fluid className='sub-sec px-5'>
        <Row>
            <Col xs={12}>
                <h2 className='sec1-heading'>SNC - Class 1 to 8 <b className='c-fr'>View All &#62;</b></h2>
            </Col>
        </Row>
        <Row>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6} xs={12} >
                <div className='book-card'>
                    <div>
                        <img src={cover1} alt="book cover" className='cover-img' />
                    </div>
                    <h2 className='pt-3'>Title</h2>
                    <b>Class Name</b>
                    <br />
                    <Button className='mt-3' variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                </div>
            </Col>
            <Col xs={12}>
                <div className='advert11'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default EBMain