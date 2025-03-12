import mongoose from "mongoose";

const { Schema } = mongoose;
const menuSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  descripton:{ type: String, required: true, maxlength: 50 },
  price: { type: String, required: true, maxlength: 10 },
  image: {type: String },
  isAvailable: {type : Boolean, default:true},
  menu:[],
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  createdAt: { type: Date, default: Date.now },
});

export const Menu = mongoose.model("Menu", menuSchema);
