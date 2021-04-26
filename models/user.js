var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email : {
        type: String
    },
    password : {
        type: String
    }
    // isAdmin  : Boolean,
    // notesPurchased : Array
});

var user = module.exports = mongoose.model("user",userSchema);

module.exports.createUser = function(newUser,callback){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(newUser.password, salt, function(err,hash){
            newUser.password= hash;
            newUser.save(callback);
        })
    })
}

module.exports.getUserByUsername = function(username,callback){
    var query = {email:username};
    user.findOne(query,callback);
}

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,function(err,isMatch){
        if(err) throw err;
        callback(null,isMatch);
    })
}

module.exports.getUserById = function(id,callback){
    user.findById(id,callback);
}

// module.exports.getUserByUsername = function(username,callback){
//     var query = {username:username};
//     user.findOne(query,callback);
// }

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash, function(err, isMatch) {
        if(err) throw err;
        callback(null,isMatch);
    });
}

module.exports.getUserById = function(id,callback){
    user.findById(id,callback);
}
