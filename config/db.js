const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    userCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
