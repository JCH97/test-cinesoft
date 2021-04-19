const { Breed } = require("../../controllers");

module.exports = function (app) {
    app.get("/api/breed/:id", async (req, res) => {
        res.json(await Breed.findById(req.params.id));
    });

    app.get("/api/breed", async (req, res) => {
        res.json(await Breed.findAll());
    });

    app.post("/api/breed", async (req, res) => {
        res.json(await Breed.create(req.body));
    });

    app.put("/api/breed/:id", async (req, res) => {
        res.json(await Breed.updateById(req.params.id, req.body));
    });

    app.delete("/api/breed/:id", async (req, res) => {
        res.json(await Breed.deleteById(req.params.id));
    });
};
