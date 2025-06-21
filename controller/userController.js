const Users = require("../model/userSchemas");

const getAllEmployee = async (req, res) => {
  console.log("Get Alls");
  try {
    const users = await Users.findAll();
    if (users.length === 0) {
      res
        .status(200)
        .send({ data: users, message: "Successfully fetched data" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error while fetching");
  }
};

const createEmployee = async (req, res) => {
  const { name } = req.body;
  try {
    const users = await Users.create({
      name: name,
    });

    res.status(200).send({ message: "Successfully create data" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error while fetching");
  }
};
module.exports = { getAllEmployee, createEmployee };
