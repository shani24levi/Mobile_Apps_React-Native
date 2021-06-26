const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    type: String, 
    title: String,
    description: String,
    amount: String, 
    img: String,
    avilibal: { type: Boolean, default: true}, 
    date: { type: Date, default: Date.now} //in what time i ate the food
});
const foodModel = mongoose.model("foods", foodSchema);
exports.foodModel = foodModel;