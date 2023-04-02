const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/intern").then(() => {
    console.log("MongoDb connection successful!");
}).catch((e) => {
    console.log("MongoDb connection error!");
})

mongoose.connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
})
