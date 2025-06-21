const { sequelize } = require("../Database/db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
);
(async () => {
    try {
        await Users.sync();
        console.log("The users table has been successfully created or updated");
    } catch (error) {
        console.error("Error syncing the User model: ", error.message);
    }
})();

module.exports = Users;