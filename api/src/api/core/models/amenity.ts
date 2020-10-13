import { EAmenities } from '../enums/amenities';

export interface IAmenity {
    iconPath: string;
    label: string;
    value: EAmenities;
}