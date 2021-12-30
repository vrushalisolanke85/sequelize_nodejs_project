var express=require('express')
var router=express.Router()
const multer=require('multer')
const path=require('path')

const userController=require('../controller/user.controller')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
        //console.log(req.file)
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+uniqueSuffix+path.extname(file.originalname));
    }
    });
    
    
    const upload=multer({storage:storage});
    
    
    // router.post('/upload',upload.single('avatar'),(req,res,next)=>{
    //     res.send({data:req.file});
    // });
    

router.get('/findAll',userController.getAllProduct);
router.post('/createProduct',upload.single('productImage'),userController.createProduct);
router.post('/updateProduct/:id',upload.single('productImage'),userController.updateProduct);
router.post('/deleteProduct/:id',userController.deleteProduct);

module.exports=router;