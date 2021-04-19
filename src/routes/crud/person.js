const { Person } = require("../../controllers");

module.exports = function (app) {
    app.get("/api/person/:id", async (req, res) => {
        res.json(await Person.findById(req.params.id));
    });

    app.get("/api/person", async (req, res) => {
        res.json(await Person.findAll());
    });

    app.post("/api/person", async (req, res) => {
        res.json(await Person.create(req.body));
    });

    app.put("/api/person/:id", async (req, res) => {
        res.json(await Person.updateById(req.params.id, req.body));
    });

    app.delete("/api/person/:id", async (req, res) => {
        res.json(await Person.deleteById(req.params.id));
    });
};
