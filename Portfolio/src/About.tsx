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
                    <li><strong>Guitar</strong> - I play regularly, take weekly lessons, and perform
                        with my church's worship team. I also enjoy casual jam sessions with my dad,
                        who plays bass.
                    </li>
                    <li><strong>Video games</strong> - I enjoy competitive shooters and MMO RPGs,
                        especially games that reward strategy, coordination, and well-defined roles.
                    </li>
                    <li><strong>Reading</strong> - I read science fiction, horror, and fantasy.
                        Recently, I've been reading
                        <a href="https://www.amazon.ca/Blood-Meridian-Evening-Redness-West/dp/0679728759" target="_blank" rel="noopener noreferrer">
                            <em> Blood Meridian </em>
                        </a>
                        by Cormac McCarthy.
                    </li>
                    <li><strong>Roller coasters</strong> - I'm a coaster enthusiast with over
                        100 different coasters ridden across North America. I enjoy learning about
                        ride design and engineering, and I keep track of my rides in a <a href="https://docs.google.com/spreadsheets/d/1TPIaoSJ712eyUFAt7aaeMTyQL7wreS7rQUR3jmHx5Jc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            spreadsheet
                        </a>.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default About;