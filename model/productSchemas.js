const { sequelize } = require("../Database/db");
const { DataTypes } = require("sequelize");

const Products = sequelize.define("products", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
(async () => {
  try {
    await Products.sync();
    console.log("The products table has been successfully created or updated");
  } catch (error) {
    console.error("Error syncing the Product model: ", error.message);
  }
})();

module.exports = Products;
