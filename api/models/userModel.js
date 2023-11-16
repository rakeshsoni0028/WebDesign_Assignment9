const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
        console.log(value + " - " + value.split(' ') + " - " + value.split(' ').length);
      if (value.length < 3) {
        console.log("Inside Name Catch");
        throw new Error('Please enter a full name (More than 3 characters).');
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        // Email validation regex
        return /^[a-zA-Z0-9._-]+@northeastern\.edu$/.test(v); //Email ID ending with northeastern
        // return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    validate(value) {
      if (!value.match(/^(?=.*[a-zA-Z])(?=.*\d).+/)) {
        throw new Error('Password must contain at least one letter and one number.');
      }
    }
  },
});

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
