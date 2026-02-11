const mongoose = require('mongoose');

async function enrollStudent() {
    const session = await mongoose.startSession(); // Start the transaction
    session.startTransaction();

    try {
        // 1. First operation: Create enrollment record
        // (Pass the session to every operation)
        await Enrollment.create([{ studentId: 'S123', courseId: 'MERN01' }], { session });

        // 2. Second operation: Deduct seat (Simulating a failure if seats < 1)
        const course = await Course.findOneAndUpdate(
            { _id: 'MERN01', seats: { $gt: 0 } },
            { $inc: { seats: -1 } },
            { session, new: true }
        );

        if (!course) throw new Error("No seats available! Transaction aborted.");

        // If everything is fine, save changes forever
        await session.commitTransaction(); //
        console.log("Enrollment successful!");

    } catch (error) {
        // If ANY step fails, UNDO everything done in this session
        await session.abortTransaction(); //
        console.error("Transaction failed, database rolled back:", error.message);
    } finally {
        session.endSession();
    }
}