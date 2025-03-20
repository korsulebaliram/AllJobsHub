import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div className="App">
            <h1>All Jobs Hub</h1>
            <p>Your Trusted Job Portal for All Careers</p>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        <strong>{job.title}</strong> at {job.company}
                        <br />
                        <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function About() {
    return (
        <div className="App">
            <h1>About All Jobs Hub</h1>
            <p>We are dedicated to providing job updates for government, private, finance, banking, IT, manufacturing, retail, and internship opportunities — helping both freshers and experienced job seekers find the right career path.</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
