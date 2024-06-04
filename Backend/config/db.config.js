const mongoose = require('mongoose');
// const logger = require('../logger/api.logger');

const connectDB = () => {

const url =
  "mongodb+srv://final:final@cluster0.6zwcy4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    mongoose.connect(url, {
        useNewUrlParser: true,              
        useUnifiedTopology: true,
    })

    mongoose.connection.once("open", async () => {
        console.log("Connected to database");
    });
      
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to database  ", err);
    });
}

module.exports = {
    connectDB
}