import { User } from "../models/userModel.js";
import { Cart } from "../models/cartModel.js";

export async function addToCart(req, res) {
  try {
    const { foodId, restaurantId } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ foodId }],
        restaurantId,
      });
    } else {
      const cartExistingItem = cart.items.find(
        (item) => item.foodId.toString() === foodId
      );
      if(!cartExistingItem){
     cart.items.push({foodId})
      }
    }
    await cart.save();
    res.status(201).json({ message: "item Added Successfully", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteItem(req,res) {
    try {
       const {itemId} = req.params
       const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    let cart = await Cart.findOne({ userId });
    const removeItem = cart.items.find((item)=>item._id.toString()=== itemId)
   if(!removeItem){
return res.status(401).json("item not found")
   }
   cart.items.pull({_id:itemId})
    await cart.save()
    res.status(200).json({ message: "card is updated Successfully", cart });
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getCart(req,res) {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User Not Found" });
        }
        const cart = await Cart.findOne({userId})
        res.status(200).json({message:"Cart Fetched Successfully", cart})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error }); 
    }
}