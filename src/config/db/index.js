const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/testdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect successfully");
    } catch (error) {
        console.log("connect fail");
    }
}

module.exports = { connect };
