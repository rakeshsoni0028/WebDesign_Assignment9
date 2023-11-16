const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    console.log("Entry point");
    try {
      console.log("Inside Try");
      const { email, password } = req.body;
      console.log(email + " and " + password);
      const user = await User.findOne({ email });
      console.log(user.fullName);
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log("IsPasswordValid : " + isPasswordValid);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }

      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
