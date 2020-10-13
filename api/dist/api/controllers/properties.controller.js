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
const getListingsForSale_handler_1 = require("../handlers/getListingsForSale.handler");
const router = express_1.Router();
router.get("/list-for-sale", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.useFaker && req.query.useFaker === 'true') {
            res.status(200).json(yield getListingsForSale_handler_1.getListingForSaleFaker(req.query));
        }
        else {
            res.status(200).json(yield getListingsForSale_handler_1.getListingForSale(req.query));
        }
    }
    catch (error) {
        res.status(400);
    }
}));
router.get("/listing-details/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        res.status(200).json(yield getListingsForSale_handler_1.getListingDetailsFaker(id));
        // if (req.query.useFaker && req.query.useFaker === 'true') {
        //     res.status(200).json(await getListingForSaleFaker(req.query));
        // } else {
        //     res.status(200).json(await getListingForSale(req.query));
        // }
    }
    catch (error) {
        res.status(400);
    }
}));
module.exports = router;
//# sourceMappingURL=properties.controller.js.map