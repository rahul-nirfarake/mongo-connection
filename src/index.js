const express = require('express');
const app = express();
const mongoConn = require('./mongoConnection');
const userRoute = require('./user/routes')

// Start MongoDB Connection
let db = mongoConn();

// Routing
app.use("/user", userRoute);


app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT 3000");
});