const dbConfig = require('../config/db.config.js')
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
)
sequelize.authenticate().then(()=>{
    console.log('Database Connected..!')
}).catch((error)=>{
    console.error('Database Connection failed',error)
})

const db={}
db.Sequelize= Sequelize
db.sequelize = sequelize

db.users = require('./user.model.js')(sequelize,DataTypes)
db.orders = require('./order.model.js')(sequelize,DataTypes)

db.users.hasMany(db.orders,{foreignKey : 'created_by'})
db.orders.belongsTo(db.users,{foreignKey : 'created_by'})

db.sequelize.sync({force:false}).then(()=>{
    console.log('DataBase tables synced');
}).catch((error)=>{
    console.error('Error : ',error);
})

module.exports=db
