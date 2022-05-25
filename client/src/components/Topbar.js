import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Logo1 from '../img/logo1.1.png';
import Logo2 from '../img/logo1.2.png';
import youtube from '../img/icons/youtube.png';
import search from '../img/icons/search.png';
import person from '../img/icons/person.png';
import {Link} from 'react-router-dom';

const Topbar = () => {
  return (
      <>
        <div className='topbar d-md-flex d-block bg-light'>
            <div className='tbar-logo d-md-block d-inline-block'>
                <img src={Logo1} className=" " width="55px"  alt="logo" />
                <img src={Logo2} className=" "  width="135px" alt="logo" />
            </div>
            <div className='tbar-advert d-md-block d-none'>
                <div style={{border: '1px solid black', width: '97%', marginLeft: '2%'}} className="py-2 mt-3" >
                    <h1 className='text-center pt-2'>Advert</h1>
                </div>
            </div>
            <div className="pt-2 tbar-icons d-md-block d-inline-block">
                <div className='pt-1'><a><img src={person} className="topbar-icons" alt="youtube" /> <strong className='tobbar-labels'>Login</strong> </a> </div>
                <div><a><img src={youtube} className="topbar-icons"  alt="youtube" /> <strong className='tobbar-labels'>Youtube Channel</strong></a> </div>
                <div><img src={search} className="topbar-icons" alt="youtube" /> <strong className='tobbar-labels'>Search</strong> </div>
            </div>
        </div>
        <div className='tbar-advert1 d-md-none d-block py-2'>
            <div style={{border: '1px solid black', width: '96%', marginLeft: '2%'}} className="py-2" >
                <h1 className='text-center pt-2'>Advert</h1>
            </div>
        </div>
      </>
  )
}

export default Topbar