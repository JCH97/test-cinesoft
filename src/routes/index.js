const { Auth } = require("../services");

module.exports = function (app) {
    app.use("/api", Auth.withAuth);

    require("./auth")(app);
    require("./image.upload")(app);
    require("./crud")(app);
    require("./shop")(app);
};
