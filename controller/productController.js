const Products = require("../model/productSchemas");

const getAllProducts = async (req, res) => {
  console.log("Get Alls");
  try {
    const products = await Products.findAll();
    if (products.length === 0) {
      res
        .status(200)
        .send({ data: products, message: "Successfully fetched data" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error while fetching");
  }
};

// const createProduct = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const products = await Products.create({
//       name: name,
//     });

//     res.status(200).send({ message: "Successfully create data" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json("Error while fetching");
//   }
// };

module.exports = {
  getAllProducts,
//   createProduct,
};
