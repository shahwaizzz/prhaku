import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {FaShare} from 'react-icons/fa';
import {BsFacebook, BsYoutube, BsInstagram, BsTwitter} from 'react-icons/bs';
import {FaYoutube, FaCommentAlt, FaRegComment} from 'react-icons/fa';
import {AiOutlineLink, AiOutlineHeart, AiOutlineDown} from 'react-icons/ai';
import {BiMenuAltLeft, BiHeart} from 'react-icons/bi';
import {RiDoubleQuotesL} from 'react-icons/ri';
import profile3 from '../img/profile3.jpg';
import profile2 from '../img/profile2.jpg';


const Comments = () => {
  return (
    <Container fluid>
        <Row className='pb-4 pt-3'>
            <Col className='py-4'>
                <h2 className='cmt-links px-2'>
                    <FaShare /> Share 
                    <a href="" className='soc-link1'><BsFacebook /></a>
                    <a href="" className='soc-link2'><BsYoutube color='red' /></a>
                    <a href="" className='soc-link3'><BsInstagram color='#3d4fa9' /></a>
                    <a href="" className='soc-link4'><BsTwitter  /></a>
                    <a href="" className='soc-link5'><AiOutlineLink  /></a>
                </h2>
            </Col>
        </Row>
        <Row className='comments-div'>
            <Col xs={12}>
                <div className='comments-heading'>
                    <div className='ch-ldiv'>
                        <h2>
                            <FaCommentAlt size='0.9cm' />
                             <b className='txt-heading'> Comments</b>
                        </h2>
                    </div>
                    <div className='ch-rdiv'>
                            <h2>
                                <BiMenuAltLeft size='1.2cm' className='menu-iconl' />
                                Sorted by <b>Newest</b> 
                            </h2>
                    </div>
                </div>
            </Col>
            <Col xs={12}>
                <h6>16 Comments</h6>
                
                <div className='single-comment'>
                    <div className='l-img-div'>
                        <img src={profile3} className="profile" alt="profile" />
                    </div>
                    <div className='r-comment-div'>
                        <h5>Lorem ipsum</h5>
                        <b className='pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, necessitatibus incidunt.</b>
                        <br />
                        <div className='icons-line-comment mt-2'>
                            <div className='cmts-options'> <BiHeart size="0.7cm" /> Like</div>
                            <div className='cmts-options'> <FaRegComment size="0.6cm" /> Comments</div>
                            <div className='cmts-options'> <RiDoubleQuotesL size="0.5cm" /> Quote Comment</div>
                        </div>
                    </div>
                </div>
                
                <div className='single-comment'>
                    <div className='l-img-div'>
                        <img src={profile2} className="profile" alt="profile" />
                    </div>
                    <div className='r-comment-div'>
                        <h5>Lorem ipsum</h5>
                        <b className='pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, necessitatibus incidunt.</b>
                        <br />
                        <div className='icons-line-comment mt-2'>
                            <div className='cmts-options'> <BiHeart size="0.7cm" /> Like</div>
                            <div className='cmts-options'> <FaRegComment size="0.6cm" /> Comments</div>
                            <div className='cmts-options'> <RiDoubleQuotesL size="0.5cm" /> Quote Comment</div>
                        </div>
                    </div>
                </div>
                
                <div className='single-comment'>
                    <div className='l-img-div'>
                        <img src={profile3} className="profile" alt="profile" />
                    </div>
                    <div className='r-comment-div'>
                        <h5>Lorem ipsum</h5>
                        <b className='pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, necessitatibus incidunt.</b>
                        <br />
                        <div className='icons-line-comment mt-2'>
                            <div className='cmts-options'> <BiHeart size="0.7cm" /> Like</div>
                            <div className='cmts-options'> <FaRegComment size="0.6cm" /> Comments</div>
                            <div className='cmts-options'> <RiDoubleQuotesL size="0.5cm" /> Quote Comment</div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
                <h2 className='load-more'>Load More <AiOutlineDown /></h2>
            </Col>
        </Row>
    </Container>
  )
}

export default Comments