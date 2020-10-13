"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cities_services_1 = require("../../services/cities.services");
const router = express_1.Router();
router.get("/cities-from-prefix", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let prefix = String(req.query.prefix);
        let limit = +req.query.limit;
        res.status(200).json(cities_services_1.CitiesService.getCitiesFromPrefix(prefix, limit));
    }
    catch (error) {
        res.status(400);
    }
}));
router.get("/cities-from-id/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let location = cities_services_1.CitiesService.getCityFromId(id);
        if (location === undefined) {
            res.status(400).send('Location not found.');
        }
        res.status(200).json(location);
    }
    catch (error) {
        res.status(400);
    }
}));
router.get("/location-from-city-state/:cityState", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cityState } = req.params;
    try {
        let location = cities_services_1.CitiesService.getSearchLocationFromCityState(cityState);
        if (location === undefined) {
            res.status(400).send('Location not found.');
        }
        res.status(200).json(location);
    }
    catch (error) {
        res.status(400);
    }
}));
router.get("/random-location", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(cities_services_1.CitiesService.getRandomPopularCity());
    }
    catch (error) {
        res.status(400);
    }
}));
module.exports = router;
//# sourceMappingURL=cities.controller.js.map