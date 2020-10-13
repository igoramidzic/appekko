import { EFeedEventType } from "../enums/feed";
import { IAd } from "./ad";
import { IProject } from './project';

export interface IFeedEvent {
    type: EFeedEventType,
    event: IProject | IAd;
}