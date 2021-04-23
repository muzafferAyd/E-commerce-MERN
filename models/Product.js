const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  // id mongoDb otomatik atıyor.
  productName: { type: String, required: true },
  desciption: { type: String },
  status: { type: String, default:"created" },
  imagePath: {
    type: String,
    default: "http://via.placeholder.com/250x250.png?text=No+Image",
  },
  quantity:{
      type:Number,
      default:0,
  },
  unitPrice: {
      type:Number,
      dafeult:0,
  },
  categoryid:{
      type:String
  },
  createdDate:{
      type:Date,
      default:Date.now,
  },
  updatedDate:{
      type:Date,
  },
  deletedDate:{
      type:Date,
  }


});


module.exports = Product = mongoose.model('Product', schema)