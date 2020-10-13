import { Response, Request, Router } from "express";
import { getListingForSale, getListingForSaleFaker, getListingDetailsFaker } from "../handlers/getListingsForSale.handler";

const router: Router = Router();

router.get("/list-for-sale", async (req: Request, res: Response) => {

    try {
        if (req.query.useFaker && req.query.useFaker === 'true') {
            res.status(200).json(await getListingForSaleFaker(req.query));
        } else {
            res.status(200).json(await getListingForSale(req.query));
        }

    } catch (error) {
        res.status(400);
    }
});

router.get("/listing-details/:id", async (req: Request, res: Response) => {

    const { id } = req.params;
    try {

        res.status(200).json(await getListingDetailsFaker(id));
        // if (req.query.useFaker && req.query.useFaker === 'true') {
        //     res.status(200).json(await getListingForSaleFaker(req.query));
        // } else {
        //     res.status(200).json(await getListingForSale(req.query));
        // }

    } catch (error) {
        res.status(400);
    }
});

module.exports = router;