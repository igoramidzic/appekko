"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Public routes
router.use("", require("./example.controller"));
router.use("/properties", require("./properties.controller"));
router.use("/cities", require("./cities.controller"));
router.use("**", (req, res) => {
    res.status(404).json({
        errors: ["Api endpoint does not exist"]
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map