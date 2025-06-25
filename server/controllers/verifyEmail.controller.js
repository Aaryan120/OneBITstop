import User from "../models/user.model.js";

export const verifyEmail = async (req, res) => {
  try {
    console.log("PRINTING REQUEST: ",req.query);
    const { token } = req.query;
    console.log("PRINTING TOKEN",token);
    if (!token) {
      return res.status(400).json({ message: "Verification token is missing", success: false });
    }

    const user = await User.findOne({ verificationToken: token });
    console.log("PRINTING USER BEFORE SAVING VERIFY EMAIL: ",user);
    if (!user) {
      return res.status(400).json({ message: "Token is invalid", success: false });
    }

    if (user.tokenExpires < Date.now()) {
      return res.status(400).json({ message: "Token has expired", success: false });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.tokenExpires = undefined;
    await user.save();

    console.log("PRINTING USER AFTER SAVING VERIFY EMAIL: ",user);
    return res.status(200).json({ message: "Email verified successfully!", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", success: false, error: error.message });
  }

};
