import { EProjectCategory } from "../enums/projectCategory";
import { ERepositoryPlatform } from "../enums/repositoryPlatforms";
import { ETechnology } from "../enums/technologies";

export interface IProject {
    name: string;
    description: string;
    owner: IAuthor;
    repository: IRepository;
    startDate: Date;
    technologies: ETechnology[];
    category: EProjectCategory;
}

export interface IAuthor {
    fullName: string;
    profilepicUrl: string;
    school: string;
}

export interface IRepository {
    platform: ERepositoryPlatform;
    url: string;
}



