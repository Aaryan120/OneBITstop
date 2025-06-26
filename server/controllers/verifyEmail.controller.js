import User from "../models/user.model.js";

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: "Verification token is missing", success: false });
    }

    const user = await User.findOne({ verificationToken: token });
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

    return res.status(200).json({ message: "Email verified successfully!", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", success: false, error: error.message });
  }

};
