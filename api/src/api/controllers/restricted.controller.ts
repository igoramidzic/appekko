import { Response, Request, Router } from "express";

const router: Router = Router();

router.get("", async (req: Request, res: Response) => {
    res.status(200).json({ message: "You're in" });
});

module.exports = router;