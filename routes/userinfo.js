let express = require('express');
let router = express.Router();
let U = require('../db/userInfo.schema');
let bcrypt = require('bcryptjs');


router.post('/userRegister', async(req,res) => {
    try{
        let {error} = U.ValidationError(req.body);
        if(error){return res.status(403).send(error.detals[0].massage)}
        let user = await U.User.findOne({"UserLogin.MobileNo":req.body.UserLogin.MobileNo});
        if(user){
            return res.status(402).send({messange:'this mobile no is already exist'});
        }

        let data = new U.User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            EmailId: req.body.EmailId,
            Address: req.body.Address,
            UserLogin: req.body.UserLogin
        });
        let salt = await bcrypt.genSalt(10);
        data.UserLogin.Password = await bcrypt.hash(data.UserLogin.Password, salt);
        let result = await data.save();
        res. send({message: 'Welcome user we got your data!', data:result});

    }
    catch(ex){
        res.send(ex.message);

    }
});

module.exports = router;