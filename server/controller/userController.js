import User from "../model/User.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, "User already exists", {}, 400);
    }
    const savedData = await newUser.save();
    return successResponse(res, "User created successfully", savedData);
  } catch (error) {
    return errorResponse(res, "Error creating user", error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return errorResponse(res, "No users found", {}, 400);
    }
    return successResponse(res, "Users fetched successfully", users);
  } catch (error) {
    return errorResponse(res, "Error fetching users", error.message);
  }
};
