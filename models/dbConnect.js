const mongoose = require("mongoose");

const DB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Succesfully Connected to DB");
  } catch (error) {
    console.log("error connecting DB", error);
  }
};

module.exports = DB;
