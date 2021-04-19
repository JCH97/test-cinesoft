const { Animal } = require("../models");

const create = async (data) => {
    try {
        let p = new Animal(data);
        return await p.save();
    } catch (error) {
        return { error };
    }
};

const findById = async (id) => {
    return await Animal.findById(id).populate("shop", "breed");
};

const findByName = async (name) => {
    return await Animal.findByName(name).populate("shop", "bread");
};

const updateById = async (id, data) => {
    return await Animal.findByIdAndUpdate(id, data);
};

const deleteById = async (id) => {
    return await Animal.findByIdAndRemove(id);
};

const findAll = async () => {
    return await Animal.find({}).populate("shop", "bread");
};

module.exports = Object.freeze({
    create,
    findById,
    findByName,
    updateById,
    deleteById,
    findAll,
});
