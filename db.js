// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbUri = 'mongodb+srv://anjithkj:njith038@cluster0.8uatvth.mongodb.net/signuplogin?retryWrites=true&w=majority';
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
