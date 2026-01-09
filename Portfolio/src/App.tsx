import About from './About.tsx';
import Home from './Home.tsx';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { FaHome } from 'react-icons/fa';
import { LinkButton } from './components/LinkButton.tsx';
import './App.css';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isHome ? null 
      : (
        <>
          <div className="home-button-wrapper">
            <Link className="home-button" to={"/"}><FaHome className="home-icon" size={32} /></Link>
          </div>
          <div className="hamburger-wrapper">
          <Hamburger toggled={isOpen} toggle={setIsOpen}/>
          </div>
        </>
      )}
      {isOpen && !isHome ? (
      <nav className="nav hamburger-nav">
        <LinkButton to="/about">About</LinkButton>
        <button>Projects</button>
        <button>Contact</button>
      </nav>)
      : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
