const mongoose = require('mongoose');

// 1. Define Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    enrolled: Boolean
});

const Student = mongoose.model('Student', studentSchema);

// 2. Aggregation Logic
async function getCityStats() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/college_db');
        
        const stats = await Student.aggregate([
            { $match: { enrolled: true } }, // Filter
            { 
                $group: { 
                    _id: "$city", 
                    avgAge: { $avg: "$age" },
                    totalStudents: { $sum: 1 } 
                } 
            }, // Group & Calculate
            { $sort: { totalStudents: -1 } } // Sort
        ]);
        
        console.log("City-wise Enrollment Stats:", stats);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

getCityStats();