const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'foods' }], //list of food og the giver 
    satisfied_users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }], //who i helped
    country: String,
    city: String,
    street: String,
    street_number: String,
    phone: String
});
const profileModel = mongoose.model("profiles", profileSchema);
exports.profileModel = profileModel;
