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
import AdminProducts from './pages/admin/AdminCategories';


function App() {
  const [nav, setNav] = useState(9);
  const [paper, setPaper] = useState(9);
  return (
    <Routes>
     <Route path="/" element={
        <div>
        <Topbar />
        {/* <Navbar setNav={setNav} /> */}
        <RNavbar setNav={setNav} />
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
      <Route path="/admin" element={<AdminProducts />} />
    </Routes>
  );
}

export default App;
