const { Pet } = require("../../controllers");

module.exports = function (app) {
    app.get("/api/pet/:id", async (req, res) => {
        res.json(await Pet.findById(req.params.id));
    });

    app.get("/api/pet", async (req, res) => {
        res.json(await Pet.findAll());
    });

    app.post("/api/pet", async (req, res) => {
        res.json(await Pet.create(req.body));
    });

    app.put("/api/pet/:id", async (req, res) => {
        res.json(await Pet.updateById(req.params.id, req.body));
    });

    app.delete("/api/pet/:id", async (req, res) => {
        res.json(await Pet.deleteById(req.params.id));
    });
};
