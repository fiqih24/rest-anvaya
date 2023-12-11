const db = require('../config/database');



const getRoomOnu = ()=>{
    const SQLQuery = `select * from room_onu_details order by room_number asc `;
    return db.execute(SQLQuery);
}

const getRoomOnuDetail = async (roomNumber) =>{
    const SQLQuery = `select * from room_onu_details  where room_number = '${roomNumber}' `;
    const [rows] = await db.execute(SQLQuery);
    let data;
    if(rows.length>0){
        data = rows[0];
    }else{
        data = [];        
    }
    return data;
}
const getM365List = ()=>{
    const SQLQuery = `select * from it_m365_list_new order by id asc `;
    return db.execute(SQLQuery);
}
const createM365List = (data)=>{
    const SQLQuery = `insert into it_m365_list_new (area_name,pc_name,email_m365) values 
    ('${data.area_name}','${data.pc_name}','${data.email_m365}')`;
    return db.execute(SQLQuery);
}
const updateM365List = (id,data)=>{
    const SQLQuery = `update it_m365_list_new set area_name='${data.area_name}',pc_name='${data.pc_name}',email_m365 = '${data.email_m365}'
    where id = '${id}'`;
    return db.execute(SQLQuery);
}
const deleteM365List = (id)=>{
    const SQLQuery = `delete from it_m365_list_new where id = '${id}'`;
    return db.execute(SQLQuery);
}
module.exports = {
    getRoomOnuDetail,getRoomOnu,updateM365List,createM365List,getM365List,deleteM365List
}