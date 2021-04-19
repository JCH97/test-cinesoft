const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const breedRef = require("./breed");
const owerRef = require("./person");

const petModel = new Schema({
    name: { type: String, required: [true, "Name is required"] },
    breed: { type: Schema.Types.ObjectId, ref: breedRef },
    owner: { type: Schema.Types.ObjectId, ref: owerRef },
});

module.exports = model("Pet", petModel);
