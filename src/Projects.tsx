import React, { useState, useEffect } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { database } from './firebase.tsx';
import './Projects.css';
import { useTheme } from './ThemeContext.tsx';
import  {RecursionCounterToast}  from './components/RecursionCounterToast.tsx';


interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    publicLink?: string;
    recursionTrick?: () => void;
    lightMode?: string;
}

const Projects: React.FC = () => {
    const { theme } = useTheme();
    const [count, setCount] = useState<number>(0);
    const countRef = ref(database, 'globalCount');

    // listen for changes in the recursion count
    useEffect(() => {
        const unsubscribe = onValue(countRef, (snapshot) => {
            setCount(snapshot.val() || 0);
        });
        return () => unsubscribe();
    }, []);

    // increment the recursion count in the database
    const incrementCount = () => {
        runTransaction(countRef, (currentCount) => {
            return (currentCount || 0) + 1;
        });
    };

    useEffect(() => {
        document.title = 'Projects - Stephen Stefanidis';
    }, []);



    function recursionTrick() {
        // fakes a page refresh and displays a joke message
        window.scrollTo(0,0);
        const body = document.body;
        body.style.display = 'none';
        setTimeout(() => {
            body.style.display = 'flex';
        }, 100);
        incrementCount();
        const element = document.getElementById('rec');
        element?.classList.add('show');
        setTimeout (() => {
            if (element) {
                element.classList.remove('show')
            }
        }, 2000);
    }
    const projects: Project[] = [
        {
            id: 1,
            title: 'Wishify',
            description: 'Collaborative wishlist platform built with React and TypeScript for the frontend and Node.js with Express and PostgreSQL for the backend. Was developed as a team of 6 over a 12 week period.',
            image: '/assets/project-images/Wishify-Interface.png',
            tags: ['React', 'TypeScript', 'Team Project'],
            link: 'https://github.com/Nicholas-Parise/Wishify',
            publicLink: 'https://wishify.ca'
        },
        {
            id: 2,
            title: 'Battleship Solitaire Solver',
            description: 'Python application that solves Battleship Solitaire puzzles using backtracking with forward checking and genetic algorithms. Features a Pygame GUI for user interaction and visualization of the solving process.',
            image: '/assets/project-images/bs.png',
            tags: ['Python', 'Algorithms', 'Individual Project'],
            link: 'https://github.com/sutterismine1/battleship-solitaire'
        },
        {
            id: 3,
            title: 'WikiRace',
            description: 'Wikipedia graph path solver that computes the shortest link path between articles using BFS and bidirectional BFS with Parallel and Sequential implementations. Developed in C++ with OpenMP for parallelization as a team of 3.',
            image: '/assets/project-images/WikiRace.jpg',
            tags: ['C++', 'OpenMP', 'Team Project'],
            link: 'https://github.com/Nicholas-Parise/WikiRace'
        },
        {
            id: 4,
            title: 'Handwritten Digit Classifier from Scratch',
            description: 'Machine learning project that implements a convolutional neural network (CNN) from scratch in Python to classify handwritten digits from the MNIST dataset. It also features a tkinter GUI for users to draw digits and see real-time predictions.',
            image: '/assets/project-images/MNIST.gif',
            tags: ['Python', 'Machine Learning', 'Team Project'],
            link: '#'
        },
        {
            id: 5,
            title: 'Who Is It? Guessing Game',
            description: 'Desktop multiplayer guessing game inspired by "Guess Who?" Built with Java Swing, this project explores network programming concepts, including sockets, encryption, and NAT traversal.',
            image: '/assets/project-images/who-is-it.png',
            tags: ['Java', 'Swing', 'Individual Project'],
            link: 'https://github.com/sutterismine1/Who-Is-It'
        },
        {
            id: 6,
            title: 'This Portfolio',
            description: 'Personal portfolio website showcasing my projects and front end development skills. Built with React and TypeScript, featuring a responsive design and dark/light mode support.',
            image: '/assets/project-images/portfolio.png',
            tags: ['React', 'TypeScript', 'Individual Project'],
            link: 'https://github.com/sutterismine1/Portfolio',
            recursionTrick: recursionTrick,
            lightMode: '/assets/project-images/portfolio-light.png',
        },
        {
            id: 7,
            title: 'Flappy Bird PPO AI',
            description: 'An AI agent trained using Proximal Policy Optimization (PPO) to play Flappy Bird. Built with Python and TensorFlow, the project demonstrates reinforcement learning techniques and neural network training.',
            image: '/assets/project-images/flappy-bird-ai.gif',
            tags: ['Python', 'AI', 'Individual Project'],
            link: 'https://github.com/sutterismine1/flappy-bird-ppo'
        }
    ];

    return (
        <div className="projects-container">
            <h1 id="project-title">Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {project.lightMode ? (
                            <>
                                { theme === 'light' ? (
                                    <img src={project.lightMode} alt={project.title} className="project-image" />
                                ) : (
                                    <img src={project.image} alt={project.title} className="project-image" />
                                )}
                            </>
                        ) : (
                            <img src={project.image} alt={project.title} className="project-image" />
                        )}
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="tags" aria-label={`Tags for ${project.title}`}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            <a href={project.link} className="project-link" target='_blank' rel="noopener noreferrer">View Source</a>
                            {project.publicLink && (
                                <a href={project.publicLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Live Website
                                </a>
                            )}
                            {project.recursionTrick && (
                                <button className="project-link" onClick={project.recursionTrick}>
                                    Live Website
                                </button>)
                            }
                        </div>
                    </div>
                ))}
            </div>
            <RecursionCounterToast count={count} />
        </div>
    );
};

export default Projects;