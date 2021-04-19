const multer = require("multer");

const makeImageUpload = function (path) {
    let upload = multer({ dest: `uploads/${path}` });
    return { uploader: upload.single("image") };
};

module.exports = makeImageUpload;
