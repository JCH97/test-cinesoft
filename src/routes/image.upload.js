const { Person } = require("../controllers");
const { ImgUploader } = require("../services");

const personUploader = ImgUploader("person");

module.exports = function (app) {
    app.post(
        "/api/person/uploadImage",
        personUploader.uploader,
        async (req, res) => {
            await Person.updateById(req.body.id, {
                pictureUrl: req.file.location,
            });
            res.json({ image: req.file.location });
        }
    );
};
