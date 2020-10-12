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

export enum ETechnology {
    NODEJS = 'nodejs',
    ANGULAR = 'angular',
    REACT = 'react',
    DOTNET = 'dotnet',
    MONGODB = 'mongodb'
}

export enum EProjectCategory {
    ECommerce = 'ecommerce',
    Business = 'business',
    SocialNetwork = 'socialnetwork'
}

export enum ERepositoryPlatform {
    Github = 'github',
    BitBucket = 'bitbucket',
    AWS = 'aws',
    GitLab = 'gitlab'
}