const { Animal } = require("../models");
const petController = require("./pet");

const create = async (data) => {
    try {
        let p = new Animal(data);
        return await p.save();
    } catch (error) {
        return { error };
    }
};

const findById = async (id) => {
    return await Animal.findById(id).populate("shop").populate("breed");
};

const findByName = async (name) => {
    return await Animal.findByName(name).populate("shop").populate("breed");
};

const updateById = async (id, data) => {
    return await Animal.findByIdAndUpdate(id, data);
};

const deleteById = async (id) => {
    return await Animal.findByIdAndRemove(id);
};

const findAll = async () => {
    return await Animal.find({}).populate("shop").populate("breed");
};

const buy = async (idAnimal, idUser) => {
    const animal = await Animal.findById(idAnimal);
    if (animal && animal.amount > 0) {
        await petController.create({
            name: animal.name,
            breed: animal.breed,
            owner: idUser,
        });

        updateById(idAnimal, { amount: animal.amount - 1 });

        return true;
    }

    return false;
};

module.exports = Object.freeze({
    create,
    findById,
    findByName,
    updateById,
    deleteById,
    findAll,
    buy,
});
