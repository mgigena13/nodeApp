const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");
const validators = require("../util/validator");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        },
    email:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        unique: true
        },
    password:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function(value){
                return validators.passwordValidado(value)
            },
            message:errorMessage.USERS.passwordIncorrecto

        }
    }
});

module.exports = mongoose.model("users", userSchema)