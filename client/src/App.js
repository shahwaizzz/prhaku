import React,{useState} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import SliderImage from './components/SliderImage';
import Announcement from './components/Announcement';
import QuickLinks from './components/QuickLinks'; 
import FeaturedVideos from './components/FeaturedVideos';
import Footer from './components/Footer';
import NotesSlider from './components/NotesSlider';
import MainSection from './pages/notes/MainSection';
import CNSlider from './pages/ClassNotes/CNSlider';
import CNMain from './pages/ClassNotes/CNMain';
import PPMain from './pages/ppapers/PPMain';
import Comments from './components/Comments';
import BSlider from './pages/books/BSlider';
import EBMain from './pages/books/EBMain';
import TMain from './pages/test/TMain';
import News from './pages/news/News';
import NewsDetails from './pages/news/NewsDetails';
import CNSlide from './components/CNSlide';
import CNotes from './pages/notes/CNotes';
import Papers from './pages/papers/Papers';
import TSeries from './pages/papers/TSeries';
import SScheme from './pages/study_scheme/SScheme';
import GPapers from './pages/papers/GPapers';
import PPapers from './pages/papers/PPapers';
import RNavbar from './components/RNavbar';
import {Routes,Route} from 'react-router-dom';
import ClassesPage from './pages/admin/ClassesPage';
import SubjectsPage from './pages/admin/SubjectsPage';
import NotesPage from './pages/admin/NotesPage';
import PapersPage from './pages/admin/PapersPage';
import SSchemesPage from './pages/admin/SSchemesPage';
import EBooksPage from './pages/admin/EBooksPage';
import AdminLogin from './pages/admin/AdminLogin';


function App() {
  const [nav, setNav] = useState(0);
  const [paper, setPaper] = useState(9);
  return (
    <Routes>
     <Route path="/" element={
        <div>
        <Topbar />
        {/* <Navbar setNav={setNav} /> */}
        <RNavbar className="d-md-none d-block" setNav={setNav} />
        <Navbar className="d-md-block d-none" />
        {
          nav === 0?(
            <>
              <SliderImage />
              <Announcement />
              <Container className='py-5'>
                <div className='advert'>
                  <h1>Advert</h1>
                </div>
              </Container>
              <QuickLinks />
              <Container className='py-5'>
                <div className='advert'>
                  <h1>Advert</h1>
                </div>
              </Container>
              <FeaturedVideos />
            </>
          ):nav === 1?(
            <>
              <NotesSlider />
              <MainSection />
            </>
          ):nav === 3?(
            <>
              <CNSlider />
              <CNMain />
            </>

          ):nav === 4?(
            <>
              <PPMain />
              <Comments />
            </>
          ):nav === 5?(
            <>
              <BSlider />
              <EBMain />
            </>
          ):nav === 6?(
            <>
              <TMain />
              <Comments />
            </>
          ):nav === 7?(
            <>
              <News />
            </>
          ):nav === 8?(
            <>
              <NewsDetails />
              <Comments />
            </>
          ):nav === 9?(
            <>
              <CNSlide />
              <CNotes />
            </>
          ):nav === 10?(
            <>
              <Papers setPaper={setPaper} paper={paper} />
              {paper === 0?(<TSeries />):paper === 1? (<GPapers />):(<PPapers />)}
              <Comments className='mt-5' />         
            </>
          ):nav === 11?(
            <>
              <SScheme />
            </>
          ):''
        }
        <Footer />
        </div>
      } /> 
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<ClassesPage />} />
      <Route path="/admin/subjects" element={<SubjectsPage />} />
      <Route path="/admin/notes" element={<NotesPage />} />
      <Route path="/admin/papers" element={<PapersPage />} />
      <Route path="/admin/studyschemes" element={<SSchemesPage />} />
      <Route path="/admin/ebooks" element={<EBooksPage />} />
      <Route path="/admin/classes" element={<ClassesPage />} />
    </Routes>
  );
}

export default App;
