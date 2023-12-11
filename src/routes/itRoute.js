const express = require('express');
const router  = express.Router();
const itController = require('../controller/itController');

router.get('/onu/:roomNumber',itController.roomOnuDetail);
router.get('/',(req,res)=>{
res.send('IT REST');
});
router.get('/m365',itController.m365List);
router.post('/m365',itController.createM365List);
router.patch('/m365/:id',itController.updateM365List);
router.delete('/m365/:id',itController.deleteM365List);

module.exports = router;