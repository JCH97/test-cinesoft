const { Person } = require("../controllers");
const { Auth } = require("../services");

module.exports = function (app) {
    app.post("/authenticate", async (req, res) => {
        const { userName, pass } = req.body;
        try {
            let user = await Person.findByUserName(userName);
            if (!user) {
                res.status(401).json({
                    error: "Incorrect user name or password",
                });
            } else {
                let same = user.pass == pass;
                if (!same) {
                    res.status(401).json({
                        error: "Incorrect user name or password",
                    });
                } else {
                    const { _id, userName } = user;
                    let tokens = Auth.sign({ _id, userName });
                    res.json({
                        accessToken: tokens.accessToken,
                        refreshToken: tokens.refreshToken,
                        worker: { _id, userName },
                    });
                }
            }
        } catch (error) {
            res.json({ error });
        }
    });

    app.get("/check-token", Auth.withAuth, async (req, res) => {
        res.json({
            userName: req.userName,
            id: req._id,
        });
    });

    app.post("/refresh-token", Auth.refreshToken, async (req, res) => {});
};
