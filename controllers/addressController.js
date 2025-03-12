import { Address } from "../models/addressModel.js";
import { User } from "../models/userModel.js";

export async function createAddress(req, res) {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const {
      name,
      HouseName,
      streetName,
      Landmark,
      city,
      State,
      Pincode,
      Phone,
      userId,
    } = req.body;
    if (
      !name ||
      !HouseName ||
      !streetName ||
      !Landmark ||
      !city ||
      !State ||
      !Pincode ||
      !Phone
    )
      return res.status(400).json({ message: "All Feilds are required" });
    const newAddress = new Address({
      name,
      HouseName,
      streetName,
      Landmark,
      city,
      State,
      Pincode,
      Phone,
      userId: req.user.id,
    });
    await newAddress.save();
    res.status(201).json({ message: "Address Added Successfully", newAddress });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteAddress(req, res) {
  try {
    const {addressId} =  req.params
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const deleAddress = await Address.findByIdAndDelete(
        addressId
    )
    return res
      .status(200)
      .json({ message: "Address Deleted Successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
