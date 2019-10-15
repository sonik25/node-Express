let mongoose = require('mongoose');
let Joi = require('@hapi/joi');
let UserInfoSchema = mongoose.Schema({
    FirstName:{type:String, required:true,minlength:5,maxlength:100},
    LastName:{type:String, required:true,minlength:2,maxlength:100},
    EmailId:{type:String,required:true},
    Address:{
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true}
    },
    UserLogin:{
        MobileNo:{type:String,required:true,minlength:10,unique:true},
        Password:{type:String,required:true}
    }
});

let User = mongoose.model('Users', UserInfoSchema);
function ValidationError(message){
    let Schema = Joi.object({
        FirstName:Joi.string().min(5).max(100).required(),
        LastName:Joi.string().min(2).max(100).required(),
        EmailId:string().required(),
        Address:{
            city:Joi.string().required(),
            state:Joi.string().required(),
            country:Joi.string().required()            
        },
        UserLogin:{
            MobileNo:Joi.string().min(10).required(),
            Password:Joi.string().required()
        }
    });
    return Schema.validate(message);
};

module.exports = {User , ValidationError};