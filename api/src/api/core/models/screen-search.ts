import { EPropertyType } from '../enums/propertyTypes';
import { ESaleType } from '../enums/saleTypes';
import { EBedroomCount } from '../enums/bedroomCount';
import { ISearchLocation } from './location';
import { EAmenities } from '../enums/amenities';

export interface IScreenSearch {
    saleType?: ESaleType;
    propertyTypes?: EPropertyType[];
    priceMin?: number;
    priceMax?: number;
    bedroomCount?: EBedroomCount[];
    location?: ISearchLocation;
    amenities?: EAmenities[];
}