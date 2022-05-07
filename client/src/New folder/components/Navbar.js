import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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

const Navbar = (props) => {
    const {setNav} = props;
    return(
        <div className='navbar1'>
            <div className='div4' onClick={()=> setNav(0)}>
                <AiOutlineHome className="navbar-icons" />
                <h5>Home</h5>
            </div>
            <div className='div1' onClick={()=> setNav(7)}>
                <img src={updateIcon2} className="navbar-icons" alt="updates-icon" />
                <h5>News</h5>
            </div>
            <div className='div4' onClick={()=> setNav(1)}>
                {/* <img src={notesIcon1} className="navbar-icons" alt="updates-icon" /> */}
                <CgNotes className="navbar-icons" />
                <h5>Notes</h5>
            </div>
            <div className='div4' onClick={()=> setNav(10)}>
                <img src={examsIcon1} color="white" style={{color:'white'}} className="navbar-icons" alt="updates-icon" />
                <h5>Papers</h5>
            </div>  
            <div className='div3'>
                <img src={stydyschemesIcon1} className="navbar-icons" alt="updates-icon" />
                <h5>Study Schemes</h5>
            </div>
            <div className='div2' onClick={()=> setNav(5)}>
                <img src={booksIcon} className="navbar-icons" alt="updates-icon" />
                <h5>e-Books</h5>
            </div>
        </div>
    )
}

export default Navbar;
