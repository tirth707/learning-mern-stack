const express = require('express');
const app = express();

// Webhooks typically send JSON payloads
app.use(express.json());

// 1. THE WEBHOOK ENDPOINT
// External services like GitHub will send a POST here
app.post('/webhook/github-events', (req, res) => {
    const eventData = req.body;

    console.log('--- New Webhook Received ---');
    console.log('Event Type:', req.headers['x-github-event']); // Identify the action
    console.log('Payload Data:', eventData);

    // 2. Respond immediately with a 200 OK
    // Webhooks should acknowledge receipt quickly to avoid timeouts.
    res.status(200).send('Webhook received successfully!');
});

app.listen(5001, () => console.log('Webhook server running on Port 5001'));