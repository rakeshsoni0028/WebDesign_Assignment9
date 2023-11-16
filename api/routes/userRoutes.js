const express = require("express");
const router = express.Router();

const controller = require("../controllers/UserController.js")
const services = require("../services/services.js");


// Create a new user
router.post("/user/create", controller.createUser);

// Update user details (full name and password)
router.put("/user/edit/:email", controller.updateUser);

// Delete user by email
router.delete("/user/delete/:email", controller.deleteUser);

// Get all users (full name, email, and hashed password)
router.get("/user/getAll", controller.getAllUsers);


router.post("/user/login", services.login);

module.exports = router;
