const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const breedModel = new Schema({
    name: { type: String, required: [true, "Name is required"] },
});

module.exports = model("Breed", breedModel);
