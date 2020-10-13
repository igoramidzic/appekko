import { Router, Request, Response } from "express";

const router: Router = Router();

// Public routes
router.use("", require("./example.controller"));
router.use("/properties", require("./properties.controller"));
router.use("/cities", require("./cities.controller"));

router.use("**", (req: Request, res: Response) => {
    res.status(404).json({
        errors: ["Api endpoint does not exist"]
    });
});

module.exports = router;