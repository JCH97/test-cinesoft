const { Person } = require("../models");

const create = async (data) => {
    try {
        let p = new Person(data);
        return await p.save();
    } catch (error) {
        return { error };
    }
};

const add = async () => {
    const exist = await Person.findOne({ userName: "JCH" });

    if (!exist) {
        let p = new Person({
            name: "Jose Carlos",
            userName: "JCH",
            pass: "12345678",
        });
        await p.save();
    }
};

const findById = async (id) => {
    return await Person.findById(id);
};

const findByName = async (name) => {
    return await Person.findByName(name);
};

const findByUserName = async (userName) => {
    return await Person.findOne({ userName });
};

const updateById = async (id, data) => {
    return await Person.findByIdAndUpdate(id, data);
};

const deleteById = async (id) => {
    return await Person.findByIdAndRemove(id);
};

const findAll = async () => {
    return await Person.find({});
};

add();

module.exports = Object.freeze({
    create,
    findById,
    findByName,
    updateById,
    deleteById,
    findAll,
    findByUserName,
});
