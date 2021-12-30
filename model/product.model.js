const {usertbl} = require("./user.model")
module.exports=(sequelize,Sequelize)=>{
    const productModel=sequelize.define('productstbl',{
        product_id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
      
        productName:{
            type:Sequelize.STRING(100),
            allowNull:false
        },
        productImage:{
            type:Sequelize.STRING(100),
            allowNull:false,
            unique:true
        },
        price:{
            type:Sequelize.STRING(20),
            allowNull:false
        },
        },{
        freezeTableName:true,
        //timestamps:false,
        timestamps:false,
      })
    return productModel;
}