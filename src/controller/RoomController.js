const res = require('express/lib/response');
const validator = require('validator');
const roomModel = require('../model/RoomModel');

const roomDetail = async (req,res) => {
    let roomNumber = req.params.room;
    let msg,status;
    const data = await roomModel.getRoomDetail(roomNumber);        
    if(validator.isNumeric(roomNumber)){
        msg ='Request Success!';
        room = data;
        status=1;
    }else{
        msg ='Format invalid!';        
        room = 'ZONK!';
        status=0;

    }
    res.json({
        status:status,
        message:msg,
        data:room
    });
}

const allRoom = async (req,res) => {        
    const [rows] = await roomModel.getAllRoom();         
    res.json({
        message:"Request Success!",
        data:rows
    });
}

const roomScoreDaily = async(req,res)=>{
 
    let msg,rows,status;   
    const datas = {
        room : req.params.room,
        from : req.body.from,
        till : req.body.till,
    }
    if(validator.isDate(req.body.from) && validator.isDate(req.body.till) ){
        msg = "Request Success!!";
        status = 1;
         rows = await roomModel.getRoomScoreDaily(datas);
     
    }else{
         rows = [];
        msg = "Date Parameter invalid!!";
        status=0;
    }
    

    res.json({
        message:msg,
        roomNumber:req.params.roomNumber,
        status:status,
        rangeDate: datas,
        data:rows,
    })
}

const allRoomScoreDaily = async(req,res)=>{
 
    let msg,rows,status;   
    const datas = {
        from : req.body.from,
        till : req.body.till,
    }
    if(validator.isDate(req.body.from) && validator.isDate(req.body.till) ){
        msg = "Request Success!!";
        status = 1;
         [rows] = await roomModel.getAllRoomScoreDaily(datas);
         if(rows.length==0){
             rows = 'Data Not Found';
         }
    }else{
         rows = [];
        msg = "Date Parameter invalid!!";
        status=0;
    }
    

    res.json({
        message:msg,
        status:status,
        rangeDate: datas,
        data:rows,
    })
}

module.exports = {
    roomDetail,allRoom,allRoomScoreDaily,roomScoreDaily
}