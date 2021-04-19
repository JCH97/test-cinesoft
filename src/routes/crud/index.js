module.exports = function (app) {
    require("./person")(app);
    require("./animal")(app);
    require("./breed")(app);
    require("./pet")(app);
    require("./shop")(app);
};
