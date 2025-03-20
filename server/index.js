const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

// Endpoint to serve job listings
app.get('/api/jobs', (req, res) => {
    const jobs = JSON.parse(fs.readFileSync('../jobs.json'));
    res.json(jobs);
});


    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load job listings.' });
        }

        try {
            const jobs = JSON.parse(data);
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ error: 'Invalid JSON format in job listings file.' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
