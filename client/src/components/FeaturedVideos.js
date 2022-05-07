import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../img/5328478.jpg'
import Image2 from '../img/img3.jpg'
import Image3 from '../img/img4.jpg'
import Image4 from '../img/img5.jpg'

const FeaturedVideos = () => {
  return (
    <Container className="p-0" fluid style={{backgroundImage: `url(${Image1})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
        <div className='feture-cdiv py-5'>    
            <Container>
                <h1 className='text-center pb-3 section-heading'>Featured Videos</h1>
                <p className='text-center txt-style1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur alias architecto aspernatur quaerat nesciunt quae id, repellendus mollitia harum nostrum aut nobis commodi dicta natus laboriosam at quos quidem fuga!</p>
                <Row >
                    <Col md={4} className="py-md-5 py-3">
                        {/* <img src={Image2} className="video-f1" alt="" /> */}
                        <iframe className='video-f1'  src="https://www.youtube.com/embed/Rey-Elwhfzs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col md={4} className="py-md-5 py-3">
                        {/* <img src={Image3} className="video-f1" alt="" /> */}
                        <iframe className='video-f1' src="https://www.youtube.com/embed/Sb-DndTDamA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col md={4} className="py-md-5 py-3">
                        {/* <img src={Image4} className="video-f1" alt="" /> */}
                        <iframe className='video-f1' src="https://www.youtube.com/embed/qvCgQ0_K634?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    </Container>
  )
}

export default FeaturedVideos