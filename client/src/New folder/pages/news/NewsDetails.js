import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {HiLink} from 'react-icons/hi';
import {FaRegCommentAlt} from 'react-icons/fa';
import {BsShareFill, BsThreeDotsVertical, BsFillPersonFill} from 'react-icons/bs';
import new1 from '../../img/img5.jpg';

const NewsDetails = () => {
  return (
    <Container fluid className='px-5'>
        <Row>
            <div className='advert11 my-5'>
                <h1>Advert</h1>
            </div>
        </Row>
        <Row>
            <Col md={9}>
                <div className='news-detail'>
                    <h1>Heading <b><BsShareFill size='0.75cm' /> <HiLink size="0.9cm" className='mx-2' /> <BsThreeDotsVertical size="0.9cm" /></b></h1>
                    <h2>Subheading</h2>
                    <img src={new1} alt="new-image" />
                    <b className='py-3'>Lorem ipsum dolor sit amet.</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus consectetur, ipsa quo iusto odit obcaecati nobis, dolores hic ex sit consequatur doloribus reprehenderit nemo, earum ab at aliquam! Repudiandae fugit nesciunt, quaerat sequi molestias, ipsam ex porro dignissimos rem placeat tempore assumenda voluptates iusto laborum, voluptate molestiae. Neque natus necessitatibus vel eius. Doloremque et labore odit eveniet temporibus nam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing ipsam ex porro dignissimos rem  ipsam ex porro dignissimos rem placeat tempore assumenda voluptates iusto laborum, voluptate molestiae. Neque natus necessitatibus vel eius. Doloremque et labore odit eveniet temporibus nam.</p>
                </div>
            </Col>
            <Col md={3}>
                <div className='vertical-advert'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='news-btm'>
                    <h2 className='py-4'>Related News</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={2} md={3} sm={4} xs={6}>
                <div className='relatec-news'>
                    <img src={new1} alt="related-news" />
                    <div className='related-news-inner'>
                        <h3 className='px-1'>Title</h3>
                        <b className='px-1'>Lorem ipsum dolor</b>
                        <div style={{fontSize: '13px'}} className="pt-4">
                            <BsFillPersonFill /> by <b>userId 323</b>
                            <b style={{float: 'right'}}>17, May 2019</b>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6}>
                <div className='relatec-news'>
                    <img src={new1} alt="related-news" />
                    <div className='related-news-inner'>
                        <h3>Title</h3>
                        <b>Lorem ipsum dolor</b>
                        <div style={{fontSize: '13px'}} className="pt-4">
                            <BsFillPersonFill /> by <b>userId 323</b>
                            <b style={{float: 'right'}}>17, May 2019</b>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6}>
                <div className='relatec-news'>
                    <img src={new1} alt="related-news" />
                    <div className='related-news-inner'>
                        <h3>Title</h3>
                        <b>Lorem ipsum dolor</b>
                        <div style={{fontSize: '13px'}} className="pt-4">
                            <BsFillPersonFill /> by <b>userId 323</b>
                            <b style={{float: 'right'}}>17, May 2019</b>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6}>
                <div className='relatec-news'>
                    <img src={new1} alt="related-news" />
                    <div className='related-news-inner'>
                        <h3>Title</h3>
                        <b>Lorem ipsum dolor</b>
                        <div style={{fontSize: '13px'}} className="pt-4">
                            <BsFillPersonFill /> by <b>userId 323</b>
                            <b style={{float: 'right'}}>17, May 2019</b>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6}>
                <div className='relatec-news'>
                    <img src={new1} alt="related-news" />
                    <div className='related-news-inner'>
                        <h3>Title</h3>
                        <b>Lorem ipsum dolor</b>
                        <div style={{fontSize: '13px'}} className="pt-4">
                            <BsFillPersonFill /> by <b>userId 323</b>
                            <b style={{float: 'right'}}>17, May 2019</b>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6}>
                <div className='relatec-news'>
                    <img src={new1} alt="related-news" />
                    <div className='related-news-inner'>
                        <h3>Title</h3>
                        <b>Lorem ipsum dolor</b>
                        <div style={{fontSize: '13px'}} className="pt-4">
                            <BsFillPersonFill /> by <b>userId 323</b>
                            <b style={{float: 'right'}}>17, May 2019</b>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='pt-5'>
            <Col>
                <h3>Explore More Topics</h3>
                <p className='news-topics mt-4'>
                    <b>Topic 1</b>
                    <b>Topic 2</b>
                    <b>Topic 3</b>
                    <b>Topic 4</b>
                    <b>Topic 5</b>
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='advert11 mb-4'>
                    <h1>Advert</h1>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default NewsDetails