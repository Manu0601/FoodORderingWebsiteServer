import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        foodId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
