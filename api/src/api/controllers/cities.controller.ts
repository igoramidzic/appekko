import { Response, Request, Router } from "express";
import { CitiesService } from "../../services/cities.services";

const router: Router = Router();

router.get("/cities-from-prefix", async (req: Request, res: Response) => {
    try {
        let prefix: string = String(req.query.prefix);
        let limit: number = +req.query.limit;
        res.status(200).json(CitiesService.getCitiesFromPrefix(prefix, limit));
    } catch (error) {
        res.status(400);
    }
});

router.get("/cities-from-id/:id", async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        let location = CitiesService.getCityFromId(id);
        if (location === undefined) {
            res.status(400).send('Location not found.');
        }
        res.status(200).json(location);

    } catch (error) {
        res.status(400);
    }
});

router.get("/location-from-city-state/:cityState", async (req: Request, res: Response) => {

    const { cityState } = req.params;
    try {

        let location = CitiesService.getSearchLocationFromCityState(cityState);
        if (location === undefined) {
            res.status(400).send('Location not found.');
        }
        res.status(200).json(location);

    } catch (error) {
        res.status(400);
    }
});

router.get("/random-location", async (req: Request, res: Response) => {
    try {
        res.status(200).json(CitiesService.getRandomPopularCity());
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;