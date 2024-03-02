module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          },
        firstName:{
            type: DataTypes.STRING,
        },
        lastName:{
            type: DataTypes.STRING,
        }
    })
    return User
}