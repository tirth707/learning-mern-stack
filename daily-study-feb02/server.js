const express = require('express');
const app = express();
app.use(express.json());

// 1. A route that simulates an error (e.g., database not found)
app.get('/test-error', (req, res, next) => {
    const err = new Error("Database connection failed!");
    err.status = 500;
    next(err); // This "jumps" straight to the error middleware
});

// 2. THE TOPIC OF THE DAY: Global Error Handling Middleware
// It MUST have 4 arguments: (err, req, res, next)
app.use((err, req, res, next) => {
    console.error(`[Error Log]: ${err.message}`);
    
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        timestamp: new Date().toISOString()
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));