const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productUrl: {
        type: String,
        required: [true, 'Please add a product URL']
    },
    productName: {
        type: String,
        required: true
    },
    analysis: {
        fakeReviewCount: { type: Number, default: 0 },
        realReviewCount: { type: Number, default: 0 },
        trustScore: { type: Number, default: 0 },
        sentimentSummary: {
            pros: [String],
            cons: [String]
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);