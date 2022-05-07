import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img3.jpg';
import img3 from '../../img/img4.jpg';
import { Button } from 'react-bootstrap';

const BSlider = () => {
  return (
    <div>
        <Carousel fade>
            <Carousel.Item style={{backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                {/* <img
                className="d-block w-100"
                src={img1}
                height="635px"
                alt="First slide"
                /> */}
                <div style={{width: '100%', height: '635px',display: 'block', backgroundColor: 'rgba(0,0,0,0.78)' }}></div>
                <Carousel.Caption>
                <h1 className='bk-slider-hd'>All the e-Books sent your way</h1>
                <h5></h5>
                <p className='text-center bk-slider-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid dicta cum pariatur saepe nulla. Ipsa totam,  quo <br />  fugiat. Fuga perspiciatis magnam placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus <br /> dolorem quia consectetur.</p>
                <Button variant="warning">Browse e-Book</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                {/* <img
                className="d-block w-100"
                src={img2}
                height="635px"
                alt="Second slide"
                /> */}
                {/* <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                <div style={{width: '100%', height: '635px',display: 'block', backgroundColor: 'rgba(0,0,0,0.78)' }}></div>
                <Carousel.Caption>
                <h1 className='bk-slider-hd'>All the e-Books sent your way</h1>
                <h5></h5>
                <p className='text-center bk-slider-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid dicta cum pariatur saepe nulla. Ipsa totam,  quo <br />  fugiat. Fuga perspiciatis magnam placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus <br /> dolorem quia consectetur.</p>
                <Button variant="warning">Browse e-Book</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{backgroundImage: `url(${img3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div style={{width: '100%', height: '635px',display: 'block', backgroundColor: 'rgba(0,0,0,0.78)' }}></div>
                <Carousel.Caption>
                <h1 className='bk-slider-hd'>All the e-Books sent your way</h1>
                <h5></h5>
                <p className='text-center bk-slider-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid dicta cum pariatur saepe nulla. Ipsa totam,  quo <br />  fugiat. Fuga perspiciatis magnam placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus <br /> dolorem quia consectetur.</p>
                <Button variant="warning">Browse e-Book</Button>
                </Carousel.Caption>
                {/* <img
                className="d-block w-100"
                src={img3}
                height="635px"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default BSlider