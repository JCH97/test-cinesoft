const jwt = require("jsonwebtoken");
const config = require("../config").JWT;

const tokenSet = {};

const sign = function (data) {
    let accessToken = jwt.sign(data, config.secret, config.options);
    let refreshToken = jwt.sign(
        data,
        config.refresh.secret,
        config.refresh.options
    );
    tokenSet[refreshToken] = accessToken;
    return { accessToken, refreshToken };
};

const refreshToken = function (req, res, next) {
    const { refreshToken } = req.body;
    if (refreshToken && refreshToken in tokenSet) {
        jwt.verify(
            refreshToken,
            config.refresh.secret,
            function (err, decoded) {
                if (err) {
                    res.status(401).json({ Unauthorized: "Invalid token" });
                } else {
                    const { userName, _id } = decoded;
                    const accessToken = jwt.sign(
                        { _id, userName },
                        config.secret,
                        config.options
                    );
                    tokenSet[refreshToken] = accessToken;
                    res.json({ accesToken });
                }
            }
        );
    } else res.status(401).json({ Unauthorized: "Invalid Token" });
};

const withAuth = function (req, res, next) {
    const token = req.headers["authorization"] || req.query.token;
    if (!token) {
        res.status(401).json({ Unauthorized: "No token provided" });
    } else {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                res.status(401).json({ Unauthorized: "Invalid token" });
            } else {
                req.id = decoded._id;
                req.userName = decoded.userName;
                next();
            }
        });
    }
};

module.exports = { sign, refreshToken, withAuth };
