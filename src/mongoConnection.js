const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

module.exports = function () {
    var db = mongoose.connect('mongodb+srv://nirfarake:devansh123@sample.jcxg9qt.mongodb.net/information?retryWrites=true&w=majority').then(() =>{
    console.log('Mongo Database Connected!');
});

return db;
}