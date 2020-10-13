import * as faker from 'faker';
import { EPropertyType } from '../core/enums/propertyTypes';
import { EListingStatus, EPropertyStatus, IPropertyListing, IPropertyDetails } from "../core/models/property";
import { CitiesService } from '../../services/cities.services'


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
]

const consolidatePropertyType = (propertyType: string): string => {

    if (propertyType === "apartment" || propertyType === "condo")
        return propertyType
    else if (propertyType === "single_family" || propertyType === "multiple_family")
        return "house"
    else
        return "other"
}

export const getListingForSale = async (query: any): Promise<IPropertyListing[]> => {

    return new Promise<IPropertyListing[]>(async (resolve, reject) => {

        let realtorReq = unirest("GET", "https://realtor.p.rapidapi.com/properties/v2/list-for-sale");

        realtorReq.query(query);
        // hardcode now but should be from ENV
        realtorReq.headers({
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "762d665b2emsh843b873a512535ap16eadfjsnd4a307820993",
            "useQueryString": true
        });

        try {

            let properties: any[];

            await realtorReq.end((realtorRes: any) => {
                properties = realtorRes.body.properties.map((prop: any): any => {
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
                        thumbnailUrl: prop.thumbnail, // just get thumbnail for now, will call another api GET to get the rest
                        sqfeet: prop.building_size ? prop.building_size.size : null, // adjust later to accomadate other units
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
                    }
                }).filter((prop: any): any => prop.propertyType !== "other");

                resolve(properties);
            });
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
};

export const getListingForSaleFaker = (query: any): Promise<IPropertyListing[]> => {

    console.log(query);

    return new Promise<IPropertyListing[]>(async (resolve, reject) => {

        let location = CitiesService.getLocationFromCityAndStateCode(query.city, query.state_code);
        let limit = +query.limit;
        let listings: IPropertyListing[] = [];

        for (let i = 0; i < limit; i++) {

            let listing = {
                propertyId: (i + 1000000).toString(),
                listingId: faker.random.number(1000000000),
                price: faker.random.number(1000000),
                list_date: faker.date.past(),
                last_update: faker.date.past(),
                year_built: faker.random.number({ min: 1950, max: 2020 }),
                listing_status: faker.random.arrayElement(Object.values(EListingStatus)),
                beds: faker.random.number(4),
                baths: faker.random.number(2),
                baths_full: faker.random.number(3),
                prop_status: faker.random.arrayElement(Object.values(EPropertyStatus)),
                propertyType: faker.random.arrayElement(Object.values(EPropertyType)),
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
                // thumbnailUrl: 'https://picsum.photos/200/300?random=' + i
            }

            listings.push(listing);
        }
        resolve(listings);
    });


}

export const getListingDetailsFaker = (id: string): Promise<IPropertyDetails> => {

    return new Promise<IPropertyDetails>(async (resolve, reject) => {

        let propertyDetails: IPropertyDetails = {
            propertyId: id,
            listingId: faker.random.number(1000000000),
            price: faker.random.number(1000000),
            list_date: faker.date.past(),
            last_update: faker.date.past(),
            year_built: faker.random.number({ min: 1950, max: 2020 }),
            listing_status: faker.random.arrayElement(Object.values(EListingStatus)),
            beds: faker.random.number(4),
            baths: faker.random.number(2),
            baths_full: faker.random.number(3),
            prop_status: faker.random.arrayElement(Object.values(EPropertyStatus)),
            propertyType: faker.random.arrayElement(Object.values(EPropertyType)),
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
        }

        if (faker.random.number(10) > -1) {
            resolve(propertyDetails);
        }
        else {
            reject();
        }
    })
}


