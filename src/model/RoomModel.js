const dbPool = require('../config/database');


const getRoomDetail= async (roomNumber)=>{
    const QUERY =`select * from hod_rooms where room_number = '${roomNumber}'`;
    const [rows,fields] =  await dbPool.execute(QUERY);
    if(rows.length>0){
        data = rows[0];
    }else{
        data = { detail: 'data not found'};
    }
    // console.log(QUERY)
    return data;
}

const getAllRoom = ()=>{
    const SQLQuery = "Select * from hod_rooms";  
    return dbPool.execute(SQLQuery);
}
const getAllRoomScoreDaily = (data) => {

    const SQLQuery = `SELECT (sum(report_score)/count(report_score)) as avg_score,report_date,
    count(report_score) as total_room_inspected FROM 
   hod_has_room_daily_reports where report_date between '${data.from}' and '${data.till}' group by report_date`;  
   
    return dbPool.execute(SQLQuery);
}
const getRoomScoreDaily = async (data) => {

    const SQLQuery = `SELECT * from hod_has_room_daily_reports where room_number='${data.room}' and report_date between '${data.from}' and '${data.till}'`;  
   
    const [rows,fields] = await  dbPool.execute(SQLQuery);
    if(rows.length>0){
        data = rows[0];
    }else{
        data = { detail: 'data not found'};
    }
    console.log(SQLQuery)
    return data;
}

module.exports = {
    getRoomDetail,getAllRoom,getAllRoomScoreDaily,getRoomScoreDaily
}