const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shopRef = require("./shop");
const breedRef = require("./breed");

const animalModel = new Schema({
    name: { type: String, required: [true, "Name is required"] },
    shop: { type: Schema.Types.ObjectId, ref: shopRef },
    breed: { type: Schema.Types.ObjectId, ref: breedRef },
    price: { type: Number },
    amount: { type: Number },
});

module.exports = model("Animal", animalModel);
