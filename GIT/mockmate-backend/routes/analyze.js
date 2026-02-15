const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   POST /api/analyze
// @desc    Analyze a product
router.post('/', async (req, res) => {
    const { url, name } = req.body;

    try {
        console.log(`Analyzing: ${name}`);
        
        // Mock Response for testing
        res.status(200).json({
            productName: name || "Test Product",
            trustScore: 88,
            analysis: {
                fakeReviewCount: 5,
                realReviewCount: 95
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;