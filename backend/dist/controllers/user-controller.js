import User from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    //get all users from DB
    try {
        const users = await User.find();
        return;
    }
    catch (error) {
    }
};
//# sourceMappingURL=user-controller.js.map