const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String
});


userSchema.index({ city: 1, age: -1 }); 

const User = mongoose.model('User', userSchema);

async function checkPerformance() {
    await mongoose.connect('mongodb://127.0.0.1:27017/perf_test');

   
    const report = await User.find({ city: 'Ahmedabad', age: { $gt: 20 } })
                             .explain("executionStats");

    console.log("Total Docs Examined:", report.executionStats.totalDocsExamined);
    console.log("Execution Time (ms):", report.executionStats.executionTimeMillis);
    
    process.exit();
}

checkPerformance();