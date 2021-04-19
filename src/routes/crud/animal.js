const { Animal } = require("../../controllers");

module.exports = function (app) {
    app.get("/api/animal/:id", async (req, res) => {
        res.json(await Animal.findById(req.params.id));
    });

    app.get("/api/animal", async (req, res) => {
        res.json(await Animal.findAll());
    });

    app.post("/api/animal", async (req, res) => {
        res.json(await Animal.create(req.body));
    });

    app.put("/api/animal/:id", async (req, res) => {
        res.json(await Animal.updateById(req.params.id, req.body));
    });

    app.delete("/api/animal/:id", async (req, res) => {
        res.json(await Animal.deleteById(req.params.id));
    });
};
