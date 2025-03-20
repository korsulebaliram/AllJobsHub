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
            <header className="App-header">
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
            </header>
        </div>
    );
}

export default App;
