import React from 'react'
// import { useHistory } from 'react-router-dom';


const Sidebar = (props) => {
    // const history = useHistory();
    //   const logout = () => {
    //      localStorage.clear();
    //      history.push("/admin/login")
    //   }
  const {sidebar} = props;
  return (
    <div className={sidebar}>
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span style={{fontWeight: '700'}} className="logo_name">PARHAAKU</span>
    </div>
      <ul className="nav-links" style={{paddingLeft: '0px'}}>
        <li>
          <a href="/admin" className="active">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/admin/classes">
            <i className='bx bx-box' ></i>
            <span className="links_name">Classes</span>
          </a>
        </li>
        <li>
          <a href="/admin/subjects">
            <i className='bx bx-list-ul' ></i>
            <span className="links_name">Subjects</span>
          </a>
        </li>
        <li>
          <a href="/admin/notes">
            <i className='bx bx-pie-chart-alt-2' ></i>
            <span className="links_name">Notes</span>
          </a>
        </li>
        <li>
          <a href="/admin/papers">
            <i className='bx bx-coin-stack' ></i>
            <span className="links_name">Papers</span>
          </a>
        </li>
        <li>
          <a href="/admin/ebooks">
            <i className='bx bx-book-alt' ></i>
            <span className="links_name">E-Books</span>
          </a>
        </li>
        <li>
          <a href="/admin/studyschemes">
            <i className='bx bx-user' ></i>
            <span className="links_name">Study Schemes</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-message' ></i>
            <span className="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-heart' ></i>
            <span className="links_name">Favrorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-cog' ></i>
            <span className="links_name">Setting</span>
          </a>
        </li>
        <li className="log_out">
          <a >
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  )
}

export default Sidebar