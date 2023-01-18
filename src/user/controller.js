let Users = require('./schema');

module.exports = async function(req, res) {
    let userListing = await Users.find({});
    res.send(userListing);
}