const { Model, STRING, INTEGER } = require("sequelize");

class Task extends Model {
	static init(connection) {
		super.init({
			id: {
				type: INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			todo: {
				type: STRING,
				allowNull: false
			},
			state: {
				type: STRING,
				allowNull: false
			},
			sequelize: connection
		});
	}
}

module.exports = Task;
