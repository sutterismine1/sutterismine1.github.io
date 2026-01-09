import { useState } from 'react';
import './Hamburger.css';
import { Link } from 'react-router';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="hamburger-container">
            <button 
                className="hamburger-button" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="hamburger-icon">&#9776;</span>
            </button>
            
            {isOpen && (
                <nav className="hamburger-menu">
                    <ul>
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}