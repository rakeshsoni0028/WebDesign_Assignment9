const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
    createUser: async (req, res) => {
        try {
          const { fullName, email, password } = req.body;
          // Add strong password validation here
      
          const newUser = new User({ fullName, email, password });
          await newUser.save();
      
          res.json({ message: "User created successfully" });
        } catch (error) {
          res.status(400).json(error.message);
        }
      },
      updateUser: async (req, res) => {
        try {
          const { fullName, password } = req.body;
          const { email } = req.params;
          console.log(email);
      
          const user = await User.findOne({ email });
      
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
      
          if (user.fullName < 3) {
            throw new Error("Please enter a full name (More than 3 characters).");
          }
      
          if (!user.password.match(/^(?=.*[a-zA-Z])(?=.*\d).+/)) {
            throw new Error("Please enter a full name (More than 3 characters).");
          }
      
          user.fullName = fullName;
          user.password = password;
          await user.save();
      
          res.json({ message: "User details updated successfully" });
        } catch (error) {
          res.status(400).json(error.message);
        }
      },
      deleteUser: async (req, res) => {
        try {
          const { email } = req.params;
          console.log("Inside Try: " + email);
          const user = await User.findOneAndDelete({ email });
      
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
      
          res.json({ message: "User deleted successfully" });
        } catch (error) {
          res.status(500).json({ error: "Internal server error" });
        }
      },
      getAllUsers: async (req, res) => {
        try {
          const users = await User.find({}, "fullName email password");
          res.json(users);
        } catch (error) {
          res.status(500).json({ error: "Internal server error" });
        }
      }

  };
  