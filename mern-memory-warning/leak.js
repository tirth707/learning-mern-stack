const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    // ⚠️ THE WARNING: Adding a global listener inside a request handler
    process.on('message', (msg) => {
        console.log("Message received:", msg);
    });

    res.send("Data processed!");
    // After this response, the listener ABOVE stays in memory forever!
});

app.listen(5001, () => console.log('Vulnerable server on Port 5001'));