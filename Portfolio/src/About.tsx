import "./About.css";
//import Hamburger from './components/Hamburger.tsx';

function About(){
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p>
                Hello! Thank you for reading my portfolio. My name is Stephen Stefanidis and...
            </p>
            <section>
                <h2>Resume</h2>
                <p>
                    You can view my resume <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </section>
            <section>
                <h2>Hobbies</h2>
                <ul>
                    <li>TypeScript & React</li>
                    <li>Full-stack Development</li>
                    <li>Web Design</li>
                </ul>
            </section>
        </div>
    );
};

export default About;