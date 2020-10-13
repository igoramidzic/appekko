import { Response, Request, Router } from "express";
import { getExample } from "../handlers/example.handler";

const router: Router = Router();

router.get("", async (req: Request, res: Response) => {
    let example: string;

    try {
        example = await getExample();
    } catch (e) {
        example = e;
    }

    console.log(example);

    res.status(200).json({
        title: example
    });
});

module.exports = router;