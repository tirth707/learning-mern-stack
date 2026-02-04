const express = require('express');
const app = express();

app.get('/stream-updates', (req, res) => {
    // 1. Mandatory Headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 2. Function to send data in SSE format (data: <message>\n\n)
    const sendUpdate = () => {
        const data = JSON.stringify({ 
            status: "Live", 
            time: new Date().toLocaleTimeString() 
        });
        res.write(`data: ${data}\n\n`); 
    };

    const interval = setInterval(sendUpdate, 3000);

    // 3. Clean up when user closes the tab
    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
});

app.listen(5000, () => console.log('SSE Server: http://localhost:5000/stream-updates'));