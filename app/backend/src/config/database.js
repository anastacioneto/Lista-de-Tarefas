require("dotenv").config();

module.exports = {
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.HOSTNAME,
	dialect: "mysql",
	define: {
		timestamps: true,
		underscored: true
	}
};
