import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Skills from './Containers/Skills';
import Resume from './Containers/Resume';
import ParticlesComponent from './connection/particles';



function App() {

  const location = useLocation();
  console.log(location);

  const renderparticleinhome = location.pathname === "/";


  return (
    <div className='App'>

      {/* particles js*/}

      {
        renderparticleinhome && (
          <ParticlesComponent />
        )
      }


      {/* navbar */}
      <Navbar />
      
      {/*main page content*/}
      <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/resume' element={<Resume />} />
      </Routes>

    </div>
  );
}

export default App;
