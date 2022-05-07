import React from 'react';
import { Container,Row, Col, Button} from 'react-bootstrap';
import {BsFacebook, BsYoutube, BsInstagram, BsTwitter} from 'react-icons/bs';
import {AiOutlineYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <Container fluid className='bg-dark text-white px-5 py-5 mt-5'>
        <Row className='px-md-4'>
            <Col md={4} className="px-md-4 ">
                <h2 className='gold-clr py-1'>PARHAAKU</h2>
                <p className='text-justify' style={{textAlign: 'justify'}}>
                    Pakistan's No.1 e-Learning platform with most authentic learning resources for students of All Grades. A sole
                    repository for books, notes, videos lectures and much more. Also  keep yourself updated with
                    the latest Admission and Scholarship information at a single plateform.
                </p>
            </Col>
            <Col md={4} className="px-md-4">
                <h2 className='gold-clr py-1'>Follow Us!</h2>
                <p>You can follow our social links and join <i className='gold-clr'>Parhaaku</i> squard</p>
                <div>
                    <a href="" style={{textDecoration: 'none',padding: '8px 0px 10px 3px', borderRadius:'9999px' ,border: '2px solid goldenrod'}} ><BsFacebook style={{marginLeft: '1px'}} color="goldenrod" size='.85cm' /> </a>
                    <a href="" className='mx-4' style={{textDecoration: 'none', padding: '8px 1px 10px 4px', borderRadius:'9999px' ,border: '2px solid goldenrod'}}><BsYoutube color="goldenrod" size='.80cm' /> </a>
                    <a href="" style={{textDecoration: 'none',padding: '8px 3px 10px 6px', borderRadius:'9999px' ,border: '2px solid goldenrod'}}><BsInstagram color="goldenrod" size='.70cm' /> </a>
                    <a href="" className='mx-4' style={{textDecoration: 'none', padding: '8px 5px 10px 8px', borderRadius:'9999px' ,border: '2px solid goldenrod'}}><BsTwitter color="goldenrod" size='.7cm' /> </a>
                </div>
            </Col>
            <Col md={4} className="px-md-4 py-lg-0 py-sm-3 py-3">
                <h2 className='gold-clr py-1'>Subscribe our newletter</h2>
                <p>Subscribe the newsletter and be the first to get exclusive update and news straight into in box</p>
                <div><input type="text" placeholder='Email Address' className='subscribeinput' /><Button style={{background:'goldenrod',padding: '6px 10px'}}>Subscribe</Button></div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer