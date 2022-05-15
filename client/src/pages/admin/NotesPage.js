import React,{useState} from 'react'
import Navbar from './Navbar'
import Notes from './Notes';
import Sidebar from './Sidebar'

const NotesPage = () => {
  const [sidebar, setSidebar] = useState('sidebar');
    const [icon, setIcon] = useState('bx bx-menu sidebarBtn');
  return (
    <>
        <Sidebar sidebar={sidebar} />
        <section className='home-section'>
            <Navbar icon={icon} setIcon={setIcon} setSidebar={setSidebar} />
            <div className='home-content'>
              <div className='sales-boxes' style={{width: '100%'}}>
                <Notes />
              </div>
            </div>
        </section>
    </>
  )
}

export default NotesPage