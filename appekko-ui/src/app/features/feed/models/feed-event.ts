import { IProject } from "src/app/core/models/project.model";
import { EFeedEventType } from "../enums/feed";

export interface IFeedEvent {
    type: EFeedEventType,
    event: IProject;
}