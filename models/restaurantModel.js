import mongoose from "mongoose";

const { Schema } = mongoose;
const restaurantSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, maxlength: 10 },
  image: {type: String },
  isOpen: {type : Boolean, default:true},
  rating: {type:String},
  menu:[],
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now },
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
