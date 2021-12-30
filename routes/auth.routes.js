const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const loginController=require('../controller/auth.controller')

router.post('/login',(req,res,next)=>{
    loginController.login(req.body.email, (result)=>{
        console.log(result)
        let isSame=bcrypt.compareSync(req.body.password,result[0].password);

        console.log(isSame)
        if(isSame)
        {
            let token=jwt.sign({name:result[0].name,mobile:result[0].mobile},'secret',{algorithm:'HS256',expiresIn:'1h'});
                res.send({error:false,token:token,message:"Logezd In"})        
        } else{
            res.send({error:true,message:"invalid login detail"})
        }
    })
});
module.exports = router;