import About from './About.tsx';
import Projects from './Projects.tsx';
import Home from './Home.tsx';
import { useTheme  } from './ThemeContext.tsx';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { FaHome } from 'react-icons/fa';
import { LinkButton } from './components/LinkButton.tsx';
import './App.css';
import Contact from './Contact.tsx';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="top-menu">
        {isHome ? null 
        : (
          <Link className="home-button" to={"/"}><FaHome className="home-icon" size={32} /></Link>
        )}
        <nav className="nav desktop-nav">
          <LinkButton to="/about">About</LinkButton>
          <LinkButton to="/projects">Projects</LinkButton>
          <LinkButton to="/contact">Contact</LinkButton>
        </nav>
        <div className="right-menu">
          {/* Theme Toggle Button - From https://toggles.dev/ */}
          <div className="theme-toggle-wrapper">
            <button
              className={"theme-toggle " + (theme === 'dark' ? 'theme-toggle--toggled' : '')}
              type="button"
              title="Toggle theme"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="1em"
                height="1em"
                fill="currentColor"
                strokeLinecap="round"
                className="theme-toggle__classic"
                viewBox="0 0 32 32"
              >
                <clipPath id="theme-toggle__classic__cutout">
                  <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
                </clipPath>
                <g clipPath="url(#theme-toggle__classic__cutout)">
                  <circle cx="16" cy="16" r="9.34" />
                  <g stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 5.5v-4" />
                    <path d="M16 30.5v-4" />
                    <path d="M1.5 16h4" />
                    <path d="M26.5 16h4" />
                    <path d="m23.4 8.6 2.8-2.8" />
                    <path d="m5.7 26.3 2.9-2.9" />
                    <path d="m5.8 5.8 2.8 2.8" />
                    <path d="m23.4 23.4 2.9 2.9" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="hamburger-wrapper">
            <Hamburger toggled={isOpen} toggle={setIsOpen}/>
          </div>
        </div>
      </div>
      {isOpen ? (
      <nav className="nav vertical-nav hamburger-nav">
        <LinkButton to="/about">About</LinkButton>
        <LinkButton to="/projects">Projects</LinkButton>
        <LinkButton to="/contact">Contact</LinkButton>
      </nav>)
      : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      { !isHome && (
      <div className="footer">
        <span>© {new Date().getFullYear()} Stephen Stefanidis</span>
        <a href="https://github.com/sutterismine1" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/stephenstefanidis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>)}
    </>
  )
}

export default App
