const { Shop } = require("../../controllers");

module.exports = function (app) {
    app.get("/api/shop/:id", async (req, res) => {
        res.json(await Shop.findById(req.params.id));
    });

    app.get("/api/shop", async (req, res) => {
        res.json(await Shop.findAll());
    });

    app.post("/api/shop", async (req, res) => {
        res.json(await Shop.create(req.body));
    });

    app.put("/api/shop/:id", async (req, res) => {
        res.json(await Shop.updateById(req.params.id, req.body));
    });

    app.delete("/api/shop/:id", async (req, res) => {
        res.json(await Shop.deleteById(req.params.id));
    });
};
