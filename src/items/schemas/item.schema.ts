import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});

// const mongoose = require('mongoose');

// // 1. Define the Schema (the blueprint)
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// // 2. Create the Model (represents the 'users' collection in MongoDB)
// const User = mongoose.model('User', userSchema);
