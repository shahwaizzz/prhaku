import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown} from 'react-bootstrap';
import updateIcon from '../img/icons/updates.png';
import updateIcon2 from '../img/icons/update.svg';
import notesIcon from '../img/icons/notes.png';
import notesIcon1 from '../img/icons/notes.svg';
import examsIcon from '../img/icons/exams.png';
import examsIcon1 from '../img/icons/exams.svg';
import stydyschemesIcon from '../img/icons/stydyschemes.png';
import stydyschemesIcon1 from '../img/icons/studyschema.svg';
import ebooksIcon from '../img/icons/ebooks.png';
import booksIcon from '../img/icons/books.svg';
import {CgNotes} from 'react-icons/cg';
import {AiOutlineHome} from 'react-icons/ai';
import navimg from '../img/navbg.jpg';


const RNavbar = (props) => {
    const {setNav} = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundImage: `url(${navimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features" onClick={()=> setNav(0)} className=' mx-lg-5 w-100 text-lg-center'>
                <AiOutlineHome color="white" className="navbar-icons" />
                <h5 className='d-lg-block d-inline mx-lg-0 mx-5'>Home</h5>
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={()=> setNav(7)} className='mx-lg-5 w-75 text-lg-center'>
                <img src={updateIcon2} className="navbar-icons" alt="updates-icon" />
                <h5 className='d-lg-block d-inline mx-lg-0 mx-5'>News</h5>
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={()=> setNav(1)} className='mx-lg-5 w-75 text-lg-center'>
                <CgNotes className="navbar-icons" color="white" />
                <h5 className='d-lg-block d-inline mx-lg-0 mx-5'>Notes</h5>
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={()=> setNav(10)} className='mx-lg-5 w-75 text-lg-center'>
                <img src={examsIcon1} color="white" style={{color:'white'}} className="navbar-icons" alt="updates-icon" />
                <h5 className='d-lg-block d-inline mx-lg-0 mx-5'>Papers</h5>
            </Nav.Link>
            <Nav.Link href="#pricing" style={{minWidth: '150px'}} className='mx-lg-5 text-lg-center'>
                <img src={stydyschemesIcon1} className="navbar-icons" alt="updates-icon" />
                <h5 className='d-lg-block d-inline mx-lg-0 mx-5' style={{minWidth: '150px'}}>Study Schemes</h5>
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={()=> setNav(5)} className='mx-lg-5 w-100 text-lg-center'>
                <img src={booksIcon} className="navbar-icons" alt="updates-icon" />
                <h5 className='d-lg-block d-inline mx-lg-0 mx-5'>e-Books</h5>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav> */}
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default RNavbar