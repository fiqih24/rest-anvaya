const express = require('express');
const app = express();
const logRequest = require('./middleware/logs');
const RoomRouter = require('./routes/RoomRoute');
const itRouter  =  require('./routes/itRoute');
require('dotenv').config();
const PORT = 2023
// app.use(express.json);
app.use(express.urlencoded({ 
    extended: true
})) 
app.use((req,res,next)=>{
    console.log(' middleware log terjadi request ke api ini');
    next();
})
app.use('/rqci',RoomRouter);
app.use('/it',itRouter);
app.listen(PORT,()=>{
    console.log('port running on 2023')
})