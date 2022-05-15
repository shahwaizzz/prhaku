import React,{useState} from 'react'
import Navbar from './Navbar'
import Classes from './Classes';
import Sidebar from './Sidebar'
import Table from 'react-bootstrap/Table'

const ClassesPage = () => {
  const [sidebar, setSidebar] = useState('sidebar');
    const [icon, setIcon] = useState('bx bx-menu sidebarBtn');
  return (
    <>
        <Sidebar sidebar={sidebar} />
        <section className='home-section'>
            <Navbar icon={icon} setIcon={setIcon} setSidebar={setSidebar} />
            <div className='home-content'>
              <div className='sales-boxes' style={{width: '100%'}}>
                <Classes />
              </div>
            </div>
        </section>
    </>
  )
}

export default ClassesPage