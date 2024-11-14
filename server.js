const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Catch-all route to serve index.html for SPA
app.get('/', (req, res) => {
res.send("hello server is start")
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});