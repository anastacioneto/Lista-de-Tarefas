"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("tasks", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			todo: {
				type: Sequelize.STRING,
				allowNull: false
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("tasks");
	}
};
