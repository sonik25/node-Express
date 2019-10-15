let express = require('express');
let app = express();
let mongoose = require ('mongoose');
let UserRegister = require('./routes/userinfo');
let port = 4500;
let Joi = require('@hapi/joi');
app.use(express.json());
app.use(express.urlencoded);

mongoose.connect('mongodb://localhost/RegisterLogin',{useNewUrlParser:true ,useUnifiedTopology:true})
.then(() => console.log('Connection Successful'))
.catch(ex => console.log(`Something went wrong ${ex.message}`));



app.listen(port, ()=> console.log(`This App is working on port number ${port}`));

app.use('/api/customer', UserRegister );
