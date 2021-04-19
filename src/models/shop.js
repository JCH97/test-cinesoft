const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shopModel = new Schema({
    name: { type: String, required: [true, "Name is required"] },
});

module.exports = model("Shop", shopModel);
