
const { Shop } = require("../models");

const create = async (data) => {
    try {
        let p = new Shop(data);
        return await p.save();
    } catch (error) {
        return { error };
    }
};

const findById = async (id) => {
    return await Shop.findById(id);
};

const findByName = async (name) => {
    return await Shop.findByName(name);
};

const updateById = async (id, data) => {
    return await Shop.findByIdAndUpdate(id, data);
};

const deleteById = async (id) => {
    return await Shop.findByIdAndRemove(id);
};

const findAll = async () => {
    return await Shop.find({});
};

module.exports = Object.freeze({
    create,
    findById,
    findByName,
    updateById,
    deleteById,
    findAll,
});