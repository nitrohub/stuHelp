const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/stuHelp",{
    keepAlive: true
})

module.exports.User = require("./user");
module.exports.Notes = require("./notes");
