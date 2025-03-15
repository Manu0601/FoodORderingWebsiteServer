import { Cart } from "../models/cartModel";
import { User } from "../models/userModel";

export async function createCheckout(req, res) {
  try {
    const { cartId, couponId } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    let cart = await Cart.findOne({ userId }).populate(items.foodId);
    if (!cart) {
      return res.status(404).json({ message: "Cart Not Found" });
    }
let totalPrice = cart.items.reduce((acc,item)=>acc+item.foodId.price*(item.quantity||1),0)
let discount = 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
