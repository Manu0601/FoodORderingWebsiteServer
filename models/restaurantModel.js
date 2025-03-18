import mongoose from "mongoose";

const { Schema } = mongoose;

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  category: { type: String }, 
});

const restaurantSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true, trim: true },
  phone: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[0-9]{10}$/ 
  },
  password: { type: String, required: true },
  image: { type: String },
  isVerified: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  menu: [menuItemSchema], 
  createdAt: { type: Date, default: Date.now },
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
