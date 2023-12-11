const { unwatchFile } = require('fs');
const validator = require('validator');
const itModel = require('../model/itModel');

const roomOnu = async (req,res)=>{
    const [rows,fields] = await itModel.getRoomOnu();
    res.json({
        message:"Request Success!",
        data:rows
    });
};

const roomOnuDetail =  async (req,res)=>{
    let roomNumber = req.params.roomNumber;
    let data = await itModel.getRoomOnuDetail(roomNumber);
    let msg;
    if (data.length>0){
        msg = 'Request Success'
    }else{
        msg = 'Data not found!';
    }
    res.json({
     message:msg,
     data:data   
    });
}

const m365List = async (req,res)=>{
    const [rows,fields] = await itModel.getM365List();
    res.json({
        message:"Request Success!",
        data:rows
    });
}
const updateM365List = async(req,res)=>{
 const id = req.params.id;
    const data = {
        area_name : req.body.area_name,
        pc_name : req.body.pc_name,
        email_m365 : req.body.email_m365,
        description : req.body.description
    }
    const result = await itModel.updateM365List(id,data);
    res.json({
        message:"data has been Update Successfully!",
        data:result
    });
}
const createM365List = async (req,res)=>{    

    // let asd = validator.isWhitelisted(JSON.stringify(req.body),'');
    // console.log(asd);
    if(typeof req.body.area_name !=='undefined' && typeof req.body.pc_name!=='undefined' && typeof req.body.email_m365!=='undefined'){
    const data = {
        area_name : req.body.area_name,
        pc_name : req.body.pc_name,
        email_m365 : req.body.email_m365,
        description : req.body.description
    }
    console.log(data)
    try{
    const result = await itModel.createM365List(data);
    res.json({
        message:"data has been Created Successfully!",
        data:result
    });
    }catch(err){
        res.json({
            message:err.message,
            data:'FAILED!'
        });
    }
    }else{
        console.log('error, parameter POST invalid');
    }
}


const deleteM365List = async (req,res)=>{
    const id = req.params.id;
    const [rows,fields] = await itModel.deleteM365List(id);
    let msg,status ;
    if (rows.affectedRows==1){
        msg = 'data has been deleted succesfully!';
        status=1;
    }else{
        msg = 'failed to delete data!';
        status=0;
    }
    res.json({
        status:status,
        message:msg,
        results:rows
    });
}

module.exports = {
    roomOnuDetail,roomOnu,updateM365List,createM365List,m365List,deleteM365List
}