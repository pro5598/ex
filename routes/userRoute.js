const express = require("express");
const {
  getAllEmployee,
  createEmployee,
} = require("../controller/userController");

const router = express.Router();
router.use(express.json());
router.get("/users", getAllEmployee);
router.post("/users", createEmployee);

module.exports = { router };
