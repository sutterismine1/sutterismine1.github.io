import "./About.css";
//import Hamburger from './components/Hamburger.tsx';

function About(){
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p>
                Hello! I'm Stephen Stefanidis, a Computer Science (Co-op) student at Brock University, graduating in Spring 2026.  
                I've completed all my coursework and co-op terms and am currently focusing on gaining practical experience through 
                a full-time position. I love coding and building web applications, and I am always eager to learn new technologies 
                and improve my skills.
            </p>
            <section>
                <h2>Programming Languages</h2>
                <p>
                    I primarily work with Python, JavaScript/TypeScript, and C#. I also have experience
                    with Java and C++ through academic and personal projects. Lately, I've been learning
                    Rust using the Brown University interactive <a href="https://rust-book.cs.brown.edu/" target="_blank" rel="noopener noreferrer"><em>Rust Programming Language</em></a> book, and I enjoy how it forces
                    you to think carefully about correctness and ownership.
                </p>
            </section>
            <section>
                <h2>Areas of Interest</h2>
                <ul>
                    <li>Full-stack Web Development</li>
                    <li>Software Engineering</li>
                    <li>Cybersecurity</li>
                    <li>AI/ML (Neural Networks and Reinforcement Learning)</li>
                    <li>Algorithms & Theory of Computation</li>
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
                    <li><strong>Guitar</strong> - I love playing the guitar whenever</li>
                </ul>
            </section>
        </div>
    );
};

export default About;