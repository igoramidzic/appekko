import { EProjectCategory } from "../enums/projectCategory";
import { ERepositoryPlatform } from "../enums/repositoryPlatforms";
import { ETechnology } from "../enums/technologies";
import { IUser } from "./user.model";

export interface IProject {
    name: string;
    description: string;
    author: IUser;
    repository: IRepository;
    technologies: ETechnology[];
    category: EProjectCategory;
    created: Date;
    updated: Date;
}

export interface IRepository {
    platform: ERepositoryPlatform;
    url: string;
}