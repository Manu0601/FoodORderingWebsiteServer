import mongoose from "mongoose";

const { Schema } = mongoose;
const menuSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  description:{ type: String, required: true, maxlength: 50 },
  price: { type: String, required: true },
  image: {type: String ,required:true},
  isAvailable: {type : Boolean, default:true},
  menu:[],
  createdAt: { type: Date, default: Date.now },
});

export const Menu = mongoose.model("Menu", menuSchema);
