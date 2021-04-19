const { Breed } = require("../models");

const create = async (data) => {
    try {
        let p = new Breed(data);
        return await p.save();
    } catch (error) {
        return { error };
    }
};

const findById = async (id) => {
    return await Breed.findById(id);
};

const findByName = async (name) => {
    return await Breed.findByName(name);
};

const updateById = async (id, data) => {
    return await Breed.findByIdAndUpdate(id, data);
};

const deleteById = async (id) => {
    return await Breed.findByIdAndRemove(id);
};

const findAll = async () => {
    return await Breed.find({});
};

module.exports = Object.freeze({
    create,
    findById,
    findByName,
    updateById,
    deleteById,
    findAll,
});
