const { Pet } = require("../models");

const create = async (data) => {
    try {
        let p = new Pet(data);
        return await p.save();
    } catch (error) {
        return { error };
    }
};

const findById = async (id) => {
    return await Pet.findById(id).populate("owner", "userName").populate("breed");
};

const findByName = async (name) => {
    return await Pet.findByName(name).populate("owner", "userName").populate("breed");
};

const updateById = async (id, data) => {
    return await Pet.findByIdAndUpdate(id, data);
};

const deleteById = async (id) => {
    return await Pet.findByIdAndRemove(id);
};

const findAll = async () => {
    return await Pet.find({}).populate("owner", "userName").populate("breed");
};

module.exports = Object.freeze({
    create,
    findById,
    findByName,
    updateById,
    deleteById,
    findAll,
});
