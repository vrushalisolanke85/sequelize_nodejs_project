
const db=require('../model/index.model')
const Sequelize=db.Sequelize;
const sequelize=db.sequelize;
const usertbl=db.usertbl;
module.exports={
    login:(email,callback)=>{
        // sequelize.query(`select * from usertbl where email='${email}'`,{
        //     replacement:[],
        //     type: Sequelize.SEL
        // })
        
        
        usertbl.findAll({where:{email:email}}).then((data)=>{
            callback(data)
        }).catch((err)=>{
            message:"not found"
        })
  
}
}