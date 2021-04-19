const { Animal } = require("../controllers");

module.exports = function(app) {
    app.post("/api/animal/buy/:id", async (req, res) => {
        console.log(req._id);
        res.json(await Animal.buy(req.params.id, req._id));
    });
}