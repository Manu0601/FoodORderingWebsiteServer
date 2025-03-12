import mongoose from "mongoose";

const { Schema } = mongoose;
const addressSchema = new Schema( {
  name: { type: String, required: true, maxlength: 50 },
  HouseName:{ type: String, required: true, maxlength: 50 },
  streetName: { type: String, required: true, maxlength: 50 },
  Landmark: { type: String, required: true, maxlength: 50 },
  city: { type: String, required: true, maxlength: 50 },
  State: { type: String, required: true, maxlength: 50 },
  Pincode: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Invalid Pincode format. It must be exactly 6 digits."],
  },  
  Phone: { type: String, required: true, maxlength: 10 },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now },
});

export const Address = mongoose.model("Address", addressSchema);

