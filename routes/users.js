var express=require('express')
var router=express.Router()
const {body}=require('express-validator');
const middleware =require('../middelware/middelware.jwt');

const userController=require('../controller/user.controller')



router.get('/findAll',userController.getAllUser);
router.post('/getUser',userController.findUser);
router.post('/createUser',[body('name').notEmpty().withMessage("Name should not be null").isAlpha().withMessage("Provide valid string with only alphabet"),body('role').isAlpha().withMessage("Role should be in string"),body('mobile').isNumeric().withMessage("Must be numeric").isLength({min:10,max:12}).withMessage("Maximum 10 digit acceptable"),body('email').isEmail().normalizeEmail().withMessage("Provide valid email ID"),body('password').isAlphanumeric().withMessage("Provide Alphanumeric password").isLength({min:8,max:10}).withMessage("Provide password of min 8 to 10 letters").notEmpty().withMessage("password not be empty")],userController.createUser);
router.post('/updateUser/:id',[body('name').notEmpty().withMessage("Name should not be null").isAlpha().withMessage("Provide valid string with only alphabet"),body('role').isAlpha().withMessage("Role should be in string"),body('mobile').isNumeric().withMessage("Must be numeric").isLength({min:10,max:12}).withMessage("Maximum 10 digit acceptable"),body('email').isEmail().normalizeEmail().withMessage("Provide valid email ID"),body('password').isAlphanumeric().withMessage("Provide Alphanumeric password").isLength({min:8,max:10}).withMessage("Provide password of min 8 to 10 letters").notEmpty().withMessage("password not be empty")],userController.updateUser);
router.post('/deleteUser/:id',userController.deleteUser);

module.exports=router;