const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const personModel = new Schema({
    name: { type: String, required: [true, "Name is required"] },
    userName: {
        type: String,
        required: [true, "User name is required"],
        unique: true,
    },
    pass: { type: String },
    photo: { type: String },
});

module.exports = model("Person", personModel);
