// let express = require('express');
// let router = express.Router();
// let Joi = require('@hapi/joi');
// let U = require('../../db/userInfo.schema');

// router.post('/auth',async(req,res) => {
//     let user = await U.User.findOne({"UserLogin.MobileNo": req.body.UserLogin.MobileNo});
//     if(!user){return res.status(403).send(error.details[0].messange)}
//     let Password
// })