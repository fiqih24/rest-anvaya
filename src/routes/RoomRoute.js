const express = require('express');
const router = express.Router();
const RoomController = require('../controller/RoomController')


router.get('/room/:room',RoomController.roomDetail);
router.get('/room',RoomController.allRoom);
router.post('/dailyscore',RoomController.allRoomScoreDaily);
router.post('/dailyscore/:room',RoomController.roomScoreDaily);


module.exports = router;

