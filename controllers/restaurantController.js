import { cloudinaryInstance } from "../config/cloudinary.js";
import { Restaurant } from "../models/restaurantModel.js";
import { User } from "../models/userModel.js";

export async function createRestaurant(req, res) {
  try {
    const { name, email, phone, rating, menu } = req.body;
    const restaurantExist = await Restaurant.findOne({ name: name });
    if (restaurantExist) {
      return res.status(400).json("Restaurant Already Exists");
    }
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }
    const imageUri = await cloudinaryInstance.uploader.upload(req.file.path);

    const newRestaurant = new Restaurant({
      name,
      email,
      phone,
      image: imageUri.url,
      rating,
      menu,
      sellerId: req.user.id,
    });
    await newRestaurant.save();
    res
      .status(201)
      .json({ message: "Restaurant Added Successfully", newRestaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateRestaurant(req, res) {
  try {
    const { restaurantId } = req.params;
    const { name, email, phone } = req.body;

    const restaurant = await Restaurant.findById(restaurantId);
    if (name) restaurant.name = name;
    if (email) restaurant.email = email;
    if (phone) restaurant.phone = phone;
    if (rating) restaurant.rating = rating;
    if (req.file) {
      const imageUri = await cloudinaryInstance.uploader.upload(req.file.path);
      restaurant.image = imageUri.url;
    }
    const updateRestaurant = await restaurant.save();
    return res
      .status(200)
      .json({ message: "Restaurant updated Successfully", updateRestaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getRestaurantByName(req,res) {
  try {
    const {name} = req.params
    const restaurant = await Restaurant.findOne({name:{$regex:name,$options:"i" }})
    if(restaurant.length=== 0)  {
return res.status(404).json({message:"Restaurant Not Found"})
    }
    res.status(200).json({message:"Restaurant Found", restaurant})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAllRestaurant(req,res) {
  try {
    const restaurant = await Restaurant.find()
    res.status(200).json({message:"All Restaurant Are Fetched", restaurant})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getRestaurantById(req,res) {
  try {
    const {restaurantId} = req.params
    const findRestaurant = await Restaurant.findById(restaurantId)
    if(!findRestaurant){
return res.status(404).json({message:"No Restaurant found"})
    }
    res.status(200).json({message: "Restaurant Fetched Successfully",findRestaurant})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });  
  }
}

export async function deleteRestaurant(req,res) {
  try {
    const {restaurantId} = req.params
const findRestaurant = await Restaurant.findById(restaurantId)
    if(!findRestaurant){
return res.status(404).json({message:"No Restaurant found"})
    }
const restaurantDel = await Restaurant.findByIdAndDelete(restaurantId)
res.status(200).json({message:"Restaurat Have Been Deleted Successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });  
  }
}