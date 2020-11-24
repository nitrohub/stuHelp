const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Name 
//email
//password




const userSchema = new mongoose.Schema({
    name : {
      type: String,
      required:true,
      unique: true  
    },
    email:{
        type : String,
        required:true,
        unique: true
    },
    password : {
        type: String,
        required:true,
        unique:true
    }
})

userSchema.pre("save",async function(next){   //This is attached to the document
    try{
        if(!this.isModified("password")){  //If the password is not entered then dont hash it else hash it!
            return next();
        }

        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    }catch(err){
        return next(err);
    }
})

userSchema.methods.comparePassword = async function(candidatePassword, next){   //This method is attached to the document when the user wants to compare the elements of the database and the entered password in the form
    try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        return next(err);
    }
}
const User = mongoose.model("User",userSchema);



module.exports = User;