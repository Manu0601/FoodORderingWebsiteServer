import mongoose from "mongoose";
const { Schema } = mongoose;

const checkoutSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    couponId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
      required: true,
    },
    discount: {
      type: Number,
      default: null,
    },
    quantity: {
      type: Number,
    },
    TotalPrice: {
      type: Number,
    },
    FinalPrice: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Checkout = mongoose.model("Checkout", checkoutSchema);
