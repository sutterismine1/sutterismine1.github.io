import "./About.css";
//import Hamburger from './components/Hamburger.tsx';

function About(){
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p>
                Hello! Thank you for reading my portfolio. My name is Stephen Stefanidis and I recently finished all my coursework
                for a Bachelor's Degree in Computer Science (Co-op) at Brock University. I will be graduating in Spring 2026.
                I love coding and building web applications, and I am always eager to learn new technologies and improve my skills.
            </p>
            <section>
                <h2>Areas of Interest</h2>
                <ul>
                    <li>Full-stack Web Development</li>
                    <li>Software Engineering</li>
                    <li>Cybersecurity</li>
                    <li>AI/ML (specifically Neural Networks and Reinforcement Learning)</li>
                    <li>Theory of Computation and Algorithms</li>
                </ul>
            </section>
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