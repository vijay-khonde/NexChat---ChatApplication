const User = require("../models/User.models");

const getProfile = async (req, res) => {
   const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
};


const getUsers = async (req, res) => {

    const users = await User.find({
        _id: { $ne: req.user.id }
    }).select("-password");

    res.json(users);
};

module.exports = { getUsers, getProfile };
 