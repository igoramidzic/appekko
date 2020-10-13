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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker = __importStar(require("faker"));
const propertyTypes_1 = require("../core/enums/propertyTypes");
const property_1 = require("../core/models/property");
const cities_services_1 = require("../../services/cities.services");
const unirest = require("unirest");
const photos = ["https://ar.rdcpix.com/9f671b0d9d777b7969349649c112c5f2c-f50338554o.jpg",
    "https://ar.rdcpix.com/610e208fe79b9533c5e103166312b312c-f75218736o.jpg",
    "https://ar.rdcpix.com/610e208fe79b9533c5e103166312b312c-f3178227471o.jpg",
    "https://ar.rdcpix.com/610e208fe79b9533c5e103166312b312c-f3306091863o.jpg",
    "https://ar.rdcpix.com/610e208fe79b9533c5e103166312b312c-f1799178643o.jpg",
    "https://ar.rdcpix.com/9f671b0d9d777b7969349649c112c5f2c-f1582833307o.jpg",
    "https://ar.rdcpix.com/9f671b0d9d777b7969349649c112c5f2c-f1262947648o.jpg",
    "https://ar.rdcpix.com/9f671b0d9d777b7969349649c112c5f2c-f360433128o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f89194533o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f602017438o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f703725924o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f1521440412o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f469864137o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f4000060025o.jpg",
    "https://ar.rdcpix.com/85d4ed6a04e09b6e83debdd66843da26c-f1454317309o.jpg"
];
const consolidatePropertyType = (propertyType) => {
    if (propertyType === "apartment" || propertyType === "condo")
        return propertyType;
    else if (propertyType === "single_family" || propertyType === "multiple_family")
        return "house";
    else
        return "other";
};
exports.getListingForSale = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let realtorReq = unirest("GET", "https://realtor.p.rapidapi.com/properties/v2/list-for-sale");
        realtorReq.query(query);
        // hardcode now but should be from ENV
        realtorReq.headers({
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "762d665b2emsh843b873a512535ap16eadfjsnd4a307820993",
            "useQueryString": true
        });
        try {
            let properties;
            yield realtorReq.end((realtorRes) => {
                properties = realtorRes.body.properties.map((prop) => {
                    return {
                        propertyId: prop.property_id,
                        listingId: prop.listing_id,
                        price: prop.price,
                        propertyType: consolidatePropertyType(prop.prop_type),
                        // list_date: prop.list_date,
                        last_update: prop.last_update,
                        // year_built: props.year_built
                        // listing_status: prop.listing_status,
                        beds: prop.beds,
                        baths_full: prop.baths_full,
                        baths: prop.baths,
                        prop_status: "for_sale",
                        thumbnailUrl: prop.thumbnail,
                        sqfeet: prop.building_size ? prop.building_size.size : null,
                        address: {
                            line: prop.address.line,
                            city: prop.address.city,
                            postal_code: prop.address.postal_code,
                            state: prop.address.state,
                            state_code: prop.address.state_code,
                            neighborhood_name: prop.address.neighborhood_name,
                            lat: prop.address.lat,
                            lon: prop.address.lon
                        }
                    };
                }).filter((prop) => prop.propertyType !== "other");
                resolve(properties);
            });
        }
        catch (e) {
            console.log(e);
            reject(e);
        }
    }));
});
exports.getListingForSaleFaker = (query) => {
    console.log(query);
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let location = cities_services_1.CitiesService.getLocationFromCityAndStateCode(query.city, query.state_code);
        let limit = +query.limit;
        let listings = [];
        for (let i = 0; i < limit; i++) {
            let listing = {
                propertyId: (i + 1000000).toString(),
                listingId: faker.random.number(1000000000),
                price: faker.random.number(1000000),
                list_date: faker.date.past(),
                last_update: faker.date.past(),
                year_built: faker.random.number({ min: 1950, max: 2020 }),
                listing_status: faker.random.arrayElement(Object.values(property_1.EListingStatus)),
                beds: faker.random.number(4),
                baths: faker.random.number(2),
                baths_full: faker.random.number(3),
                prop_status: faker.random.arrayElement(Object.values(property_1.EPropertyStatus)),
                propertyType: faker.random.arrayElement(Object.values(propertyTypes_1.EPropertyType)),
                address: {
                    line: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    state_code: faker.address.stateAbbr(),
                    postal_code: faker.address.zipCode(),
                    neighborhood_name: faker.address.streetName(),
                    lat: +faker.random.number({ min: location.lat - 0.06, max: location.lat + 0.06, precision: 0.001 }),
                    lon: +faker.random.number({ min: location.lng - 0.06, max: location.lng + 0.06, precision: 0.001 })
                },
                sqfeet: faker.random.number({ min: 700, max: 4000 }),
                thumbnailUrl: photos[faker.random.number({ min: 0, max: photos.length - 1 })],
            };
            listings.push(listing);
        }
        resolve(listings);
    }));
};
exports.getListingDetailsFaker = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let propertyDetails = {
            propertyId: id,
            listingId: faker.random.number(1000000000),
            price: faker.random.number(1000000),
            list_date: faker.date.past(),
            last_update: faker.date.past(),
            year_built: faker.random.number({ min: 1950, max: 2020 }),
            listing_status: faker.random.arrayElement(Object.values(property_1.EListingStatus)),
            beds: faker.random.number(4),
            baths: faker.random.number(2),
            baths_full: faker.random.number(3),
            prop_status: faker.random.arrayElement(Object.values(property_1.EPropertyStatus)),
            propertyType: faker.random.arrayElement(Object.values(propertyTypes_1.EPropertyType)),
            address: {
                line: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                state_code: faker.address.stateAbbr(),
                postal_code: faker.address.zipCode(),
                neighborhood_name: faker.address.streetName(),
                lat: 0,
                lon: 0
            },
            sqfeet: faker.random.number({ min: 700, max: 4000 }),
            photos: [photos[faker.random.number({ min: 0, max: photos.length - 1 })]]
        };
        if (faker.random.number(10) > -1) {
            resolve(propertyDetails);
        }
        else {
            reject();
        }
    }));
};
//# sourceMappingURL=getListingsForSale.handler.js.map