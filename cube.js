const fs = require("fs");
const jwt = require("jsonwebtoken");
const jwkToPem = require("jwk-to-pem");
const jwks = JSON.parse(fs.readFileSync("jwks.json"));
const _ = require("lodash");

module.exports = {
    checkAuth: async (req, auth) => {
        const decoded = jwt.decode(auth, { complete: true });
        const jwk = _.find(jwks.keys, x => x.kid === decoded.header.kid);
        const pem = jwkToPem(jwk);
        req.securityContext = jwt.verify(auth, pem);
    }
};