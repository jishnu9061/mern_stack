import { get } from "mongoose";
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

export const getUserById = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    if (!getUser) {
      return errorResponse(res, "User not found", {}, 404);
    }
    return successResponse(res, "User fetched successfully", getUser);
  } catch (error) {
    return errorResponse(res, "Error fetching user by Id", error.message);
  }
};
