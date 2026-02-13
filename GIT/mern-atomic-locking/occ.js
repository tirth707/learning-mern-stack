const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    balance: Number
}, { optimisticConcurrency: true }); // THE UNIQUE PART: Enables OCC

const Account = mongoose.model('Account', accountSchema);

async function safeWithdraw(amount) {
    const account = await Account.findOne({ _id: 'SOME_ID' }); //
    
    // Imagine a 2-second delay here where another request comes in
    account.balance -= amount;

    try {
        await account.save(); // Mongoose checks if __v matches the DB
        console.log("Success: Balance updated!");
    } catch (error) {
        // If someone else updated the account while we were "thinking", this fails
        console.error("CRITICAL WARNING: Version conflict! Data was modified by another process.");
    }
}