export enum EProjectCategory {
    ECommerce = 'ecommerce',
    Business = 'business',
    SocialNetwork = 'socialnetwork'
}

export const getProjectCategory = (repository: EProjectCategory): string => {
    switch (repository) {
        case EProjectCategory.Business:
            return 'Business';
        case EProjectCategory.ECommerce:
            return 'E-Commerce';
        case EProjectCategory.SocialNetwork:
            return 'Social Network';
        default:
            throw new Error('not implemented');
    }
}