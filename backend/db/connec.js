const mongoose = require("mongoose")

const connect = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Mongoose connected.");
    } catch (error) {
        console.log(error);
    }
}


module.exports = connect;