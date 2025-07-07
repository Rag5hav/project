const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 📦 User schema banaya
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // password ko default me query me mat bhejna
  },
}, {
  timestamps: true // createdAt, updatedAt automatic fields
});

// 🔐 Save se pehle password hash karne wala pre-hook
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // agar password change nahi hua toh skip kar
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// 🔍 Custom method: compare entered password vs hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  if (!this.password) {
    throw new Error('Password not set on user document');
  }
  return await bcrypt.compare(candidatePassword, this.password);
};

// 📤 Export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
