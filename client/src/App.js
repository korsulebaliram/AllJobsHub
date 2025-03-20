import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div className="App">
            <div className="hero-section">
                <h1>Welcome to All Jobs Hub</h1>
                <p>Your Trusted Job Portal for All Careers</p>
            </div>

            <div className="jobs-container">
                {jobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
