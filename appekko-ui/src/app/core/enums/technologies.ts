export enum ETechnology {
    NODEJS = 'nodejs',
    ANGULAR = 'angular',
    REACT = 'react',
    DOTNET = 'dotnet',
    MONGODB = 'mongodb'
}

export const getTechnology = (technology: ETechnology): string => {
    switch (technology) {
        case ETechnology.ANGULAR:
            return 'Angular';
        case ETechnology.NODEJS:
            return 'Node.JS';
        case ETechnology.REACT:
            return 'React';
        case ETechnology.DOTNET:
            return '.NET';
        case ETechnology.MONGODB:
            return 'MongoDB';
        default:
            return 'Not Found';
    }
}