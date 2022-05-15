import React,{useState} from 'react'
import Navbar from './Navbar'
import EBooks from './EBooks';
import Sidebar from './Sidebar'

const EBooksPage = () => {
  const [sidebar, setSidebar] = useState('sidebar');
    const [icon, setIcon] = useState('bx bx-menu sidebarBtn');
  return (
    <>
        <Sidebar sidebar={sidebar} />
        <section className='home-section'>
            <Navbar icon={icon} setIcon={setIcon} setSidebar={setSidebar} />
            <div className='home-content'>
              <div className='sales-boxes' style={{width: '100%'}}>
                <EBooks />
              </div>
            </div>
        </section>
    </>
  )
}

export default EBooksPage