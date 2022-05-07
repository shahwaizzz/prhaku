import React from 'react';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaSearch, FaRegCommentAlt, FaList} from 'react-icons/fa';
import new1 from '../../img/img3.jpg';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsShareFill, BsFillBellFill} from 'react-icons/bs';
import {CgCalendarDates, CgFileDocument} from 'react-icons/cg';
import {MdAnnouncement} from 'react-icons/md';
import {SiGooglescholar} from 'react-icons/si';
import {RiUserSearchFill} from 'react-icons/ri';


const News = () => {
  return (
    <>
        <Container fluid className='padding-zero'>
            <div className='news-slid'>
                <div className='news-opcity-div'>
                    <div className='news-searchbar'>
                        <InputGroup className="mb-3" >
                        <FormControl
                            placeholder="Search Latest News"
                            aria-label="Search Latest News"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                            <FaSearch />
                            </Button>
                        </InputGroup>
                    </div>
                    <div className='ns-icons-div'>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <MdAnnouncement color="white" size='0.7cm' /><br />
                            <b>Latest <br /> Announcements</b>
                        </div>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <BsFillBellFill color="white" size='0.7cm' /><br />
                            <b>Admission <br /> Alerts</b>
                        </div>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <CgCalendarDates color="white" size='0.9cm' /><br />
                            <b>Datesheets</b>
                        </div>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <FaList color="white" size='0.9cm' /><br />
                            <b>Merit List</b>
                        </div>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <CgFileDocument color="white" size='0.9cm' /><br />
                            <b>Results</b>
                        </div>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <SiGooglescholar color="white" size='0.9cm' /><br />
                            <b>Scholarships</b>
                        </div>
                        <div className='ns-single-icon py-3 px-1 mx-3'>
                            <RiUserSearchFill color="white" size='0.9cm' /><br />
                            <b>Jobs</b>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container fluid className='px-5 py-5'>
            <Row>
                {/* <Col xs={3}>
                    <div className='popular-topics py-5 px-lg-4'>
                        <div className='px-5'>
                            <h2>Popular Topics</h2>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </Col> */}
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='news-card1'>
                        <img src={new1} alt="card-img" />
                        <div className='news-card-innerdiv'>
                            <h3>Title <b><AiOutlineHeart /> <FaRegCommentAlt size="0.6cm" className='mx-2' /> <BsShareFill size="0.6cm" /></b></h3>
                            <p>Lorem, ipsum dolor sit amet consectetur aperiam praesentium incidunt, eaque architecto fugit! Sed velit eligendi consequuntur natus quas assumenda reiciendis, voluptas impedit?</p>
                            <h5>Category</h5>
                            <a>Lorem ipsum dolor</a>
                            <h5>Last Updated</h5>
                            <a>12th March, 2022</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className='advert11 mt-5'>
                    <h1>Advert</h1>
                </div>
            </Row>
        </Container>
    </>
  )
}

export default News