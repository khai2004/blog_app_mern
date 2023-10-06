const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      uniqe: true,
    },
    email: {
      type: String,
      required: true,
      uniqe: true,
    },
    password: {
      type: String,
      required: true,
      uniqe: true,
    },
    profilePic: {
      type: String,
      required: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User', UserSchema);
