const Sequelize=require('sequelize')
const sequelize=new Sequelize('vrushalidb','root','',{host:'localhost',dialect:'mysql'})


sequelize.authenticate().then(()=>{
    console.log("Connection establish!!!");
}).catch(err=>{
    console.log('Not Connected!!!')
})

const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize;



db.usertbl=require('./user.model')(sequelize,Sequelize);
db.productstbl=require('./product.model')(sequelize,Sequelize);

//db.usertbl.hasMany(db.productstbl);
//db.productstbl.belongsTo(db.usertbl);

module.exports=db;