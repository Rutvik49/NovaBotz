module.exports=(sequelize,DataTypes)=>{
    const Order = sequelize.define('order',{
        product_name:{
            type: DataTypes.STRING,
        },
        created_by:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Order
}