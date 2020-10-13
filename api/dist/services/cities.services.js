"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require("path");
class CitiesService {
    static initialize() {
        // console.log(path.resolve(__dirname, "../../src/data/uscities.csv"));
        this.cityLocations = fs.readFileSync(path.resolve(__dirname, "../../src/data/uscities.csv"))
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map((line) => line.trim()) // remove white spaces for each line
            .map((line) => {
            var buffer = line.split(',');
            return {
                city: buffer[0],
                state: buffer[1],
                state_full_name: buffer[2],
                lat: +buffer[3],
                lng: +buffer[4],
                id: buffer[5]
            };
        }).slice(1); // split each line to array
        // console.log(this.cities_csv)
    }
    // used by faker
    static getLocationFromCityAndStateCode(city, stateCode) {
        let locationToReturn;
        this.cityLocations.forEach(location => {
            if (location.city.trim() === city.trim() && location.state.trim() === stateCode.trim()) {
                locationToReturn = location;
            }
        });
        return locationToReturn;
    }
    static getCitiesFromPrefix(prefix, limit = 5) {
        if (prefix === undefined || limit === undefined) {
            return [];
        }
        prefix = prefix.trim().replace(/\s/g, '');
        return this.cityLocations.filter(d => {
            let fullString1 = (d.city + "," + d.state).toLowerCase().replace(/\s/g, '');
            let fullString2 = (d.city + "," + d.state_full_name).toLowerCase().replace(/\s/g, '');
            if (fullString1.startsWith(prefix.toLowerCase().replace(/\s/g, '')) ||
                fullString2.startsWith(prefix.toLowerCase().replace(/\s/g, '')))
                return true;
            return false;
        }).splice(0, limit);
    }
    static getCityFromId(id) {
        let searchLocation = this.cityLocations.find(x => x.id == id);
        return searchLocation ? searchLocation : undefined;
    }
    static getSearchLocationFromCityState(cityState) {
        cityState = cityState.trim().replace(/\s/g, '');
        let searchLocation = this.cityLocations.find(d => {
            let fullString1 = (d.city + ", " + d.state).toLowerCase().replace(/\s/g, '');
            let fullString2 = (d.city + ", " + d.state_full_name).toLowerCase().replace(/\s/g, '');
            if (fullString1.startsWith(cityState.toLowerCase().replace(/\s/g, '')) || fullString2.startsWith(cityState.toLowerCase().replace(/\s/g, '')))
                return true;
            return false;
        });
        if (!searchLocation)
            return undefined;
        return searchLocation;
    }
    static getRandomPopularCity() {
        return this.cityLocations[Math.floor(Math.random() * this.cityLocations.length)];
    }
}
exports.CitiesService = CitiesService;
//# sourceMappingURL=cities.services.js.map