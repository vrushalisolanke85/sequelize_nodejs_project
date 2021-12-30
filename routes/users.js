var express=require('express')
var router=express.Router()


const userController=require('../controller/user.controller')



router.get('/findAll',userController.getAllUser);
router.post('/findUser',userController.findUser);
router.post('/createUser',userController.createUser);
router.post('/updateUser/:id',userController.updateUser);
router.post('/deleteUser/:id',userController.deleteUser);

module.exports=router;