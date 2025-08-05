import User from "../model/User.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const savedData = await newUser.save();
    res.status(200).json(savedData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

