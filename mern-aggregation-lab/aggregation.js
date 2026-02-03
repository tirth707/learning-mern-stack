const mongoose = require('mongoose');

// Example Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    enrolled: Boolean
});

const Student = mongoose.model('Student', studentSchema);

async function getCityStats() {
    try {
        const stats = await Student.aggregate([
            // Stage 1: Filter for only enrolled students
            { $match: { enrolled: true } },
            
            // Stage 2: Group by city and calculate average age
            { 
                $group: { 
                    _id: "$city", 
                    avgAge: { $avg: "$age" },
                    totalStudents: { $sum: 1 } 
                } 
            },
            
            // Stage 3: Sort by total students descending
            { $sort: { totalStudents: -1 } }
        ]);
        
        console.log("City-wise Enrollment Stats:", stats);
    } catch (err) {
        console.error(err);
    }
}

// Connect to MongoDB and run test
async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log("Connected to MongoDB");
        
        // Insert test data
        await Student.deleteMany({});
        await Student.insertMany([
            { name: "Alice", age: 20, city: "New York", enrolled: true },
            { name: "Bob", age: 22, city: "Los Angeles", enrolled: true },
            { name: "Charlie", age: 21, city: "New York", enrolled: true },
            { name: "David", age: 23, city: "Chicago", enrolled: false }
        ]);
        console.log("Test data inserted");
        
        // Run aggregation
        await getCityStats();
        
        await mongoose.connection.close();
        console.log("Connection closed");
    } catch (err) {
        console.error("Error:", err);
    }
}

main();