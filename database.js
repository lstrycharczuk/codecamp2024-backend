// database.js
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tls: true,
    };
    await mongoose.connect(process.env.MONGO_DB, connectionOptions);
    console.log('Connected to MongoDB Atlas cluster');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas cluster:', error);
  }
};

module.exports = connectToDatabase;