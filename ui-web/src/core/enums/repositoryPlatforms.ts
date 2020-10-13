export enum ERepositoryPlatform {
    Github = 'github',
    BitBucket = 'bitbucket',
    AWS = 'aws',
    GitLab = 'gitlab'
}

export const getRepositoryPlatform = (repository: ERepositoryPlatform): string => {
    switch (repository) {
        case ERepositoryPlatform.AWS:
            return 'AWS';
        case ERepositoryPlatform.BitBucket:
            return 'BitBucket';
        case ERepositoryPlatform.GitLab:
            return 'GitLab';
        case ERepositoryPlatform.Github:
            return 'GitHub';
        default:
            throw new Error('not implemented');
    }
}