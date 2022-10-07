const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        host:'a3bm4rkhcnv0aoa6:gdvhi2sp31o5wi0w@au77784bkjx6ipju.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/uovoke8ilsfkhnnj',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        }
    })
}
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}
module.exports = sequelize;