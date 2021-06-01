const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },//the giver 
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, 
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'foods' }, 
    approved:{ type: Boolean, default: false},
    date: { type: Date, default: Date.now}
});
const requestModel = mongoose.model("requests", requestSchema);
exports.requestModel = requestModel;