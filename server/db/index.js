import Sequelize from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });

const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log(`\n MYSQL Database Connected !`);
    } catch (error) {
        console.log("Database connection error ",error);
        process.exit(1)
    }
}

export default connectDB;

