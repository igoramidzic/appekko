import { ICoordinates } from './coordinates';

export interface ISearchLocation extends ICoordinates {
    id: string;
    city: string;
    state: string;
    state_full_name: string;
}