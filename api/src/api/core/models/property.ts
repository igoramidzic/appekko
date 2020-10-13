import { EPropertyType } from '../enums/propertyTypes';
import { IPropertyAddress } from './address';

export interface IPropertyListing {
    propertyId: string;
    listingId: number;
    price: number
    propertyType: EPropertyType;
    list_date?: Date;
    last_update: Date;
    year_built?: number;
    listing_status?: EListingStatus;
    beds: number;
    baths_full: number;
    baths: number;
    prop_status: EPropertyStatus;
    address: IPropertyAddress;
    thumbnailUrl: string;
    sqfeet: number;
}

// add more stuff, may extend IPropertyLisings
export interface IPropertyDetails {
    propertyId: string;
    listingId: number;
    price: number
    propertyType: EPropertyType;
    list_date?: Date;
    last_update?: Date;
    year_built?: number;
    listing_status?: EListingStatus;
    beds: number;
    baths_full: number;
    baths: number;
    prop_status: EPropertyStatus;
    address: IPropertyAddress;
    photos?: string[];
    sqfeet: number;
}

export enum EListingStatus {
    Active = 'active'
}

export enum EPropertyStatus {
    ForRent = 'for_rent',
    ForSale = 'for_sale'
}

export interface IPropertyPhoto {
    href: string;
}