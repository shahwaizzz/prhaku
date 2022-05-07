import React from 'react';
import { Container,Row,Button } from 'react-bootstrap';
import Image1 from '../img/img1.jpg';

const Announcement = () => {
  return (
    <Container className='py-5'>
        <Row>
            <h1 className='text-center section-heading pb-3'>Latest Announcements</h1>
        </Row>
        <div style={{display: 'flex', width: '100%', justifyContent:'space-around'}}>
            <div className='announce-card bg-light shadow'>
                <img src={Image1} alt="imagee" className='annouce-cardimg' />
                <h4 className='pt-3'><b>Title</b></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi nisi cumque corrupti quia vero? Culpa quis adipisci sit temporibus illo eos delectus totam nobis?</p>
                <Button >Secondary</Button><br />
                <p className='pt-3'><i >CATEGORY</i></p>
                <p>
                    <b className='category-tags'>Board Exams</b>
                    <b className='category-tags'>Lorem</b>
                    <b className='category-tags'>Board Exams</b>
                </p>
                <b className='category-tags'>Lorem</b>
                <b className='category-tags'>Board Exams</b>

            </div>
            <div className='announce-card bg-light shadow'>
                <img src={Image1} alt="imagee" className='annouce-cardimg' />
                <h4 className='pt-3'><b>Title</b></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi nisi cumque corrupti quia vero? Culpa quis adipisci sit temporibus illo eos delectus totam nobis?</p>
                <Button >Secondary</Button><br />
                <p className='pt-3'><i >CATEGORY</i></p>
                <p>
                    <b className='category-tags'>Board Exams</b>
                    <b className='category-tags'>Lorem</b>
                    <b className='category-tags'>Board Exams</b>
                </p>
                <b className='category-tags'>Lorem</b>
                <b className='category-tags'>Board Exams</b>

            </div>
            <div className='announce-card bg-light shadow'>
                <img src={Image1} alt="imagee" className='annouce-cardimg' />
                <h4 className='pt-3'><b>Title</b></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi nisi cumque corrupti quia vero? Culpa quis adipisci sit temporibus illo eos delectus totam nobis?</p>
                <Button >Secondary</Button><br />
                <p className='pt-3'><i >CATEGORY</i></p>
                <p>
                    <b className='category-tags'>Board Exams</b>
                    <b className='category-tags'>Lorem</b>
                    <b className='category-tags'>Board Exams</b>
                </p>
                <b className='category-tags'>Lorem</b>
                <b className='category-tags'>Board Exams</b>

            </div>
        </div>
    </Container>
  )
}

export default Announcement