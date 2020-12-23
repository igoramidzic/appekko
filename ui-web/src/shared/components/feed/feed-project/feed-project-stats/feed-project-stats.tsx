import React from 'react'
import { getProjectCategory } from '../../../../../core/enums/projectCategory'
import { getRepositoryPlatform } from '../../../../../core/enums/repositoryPlatforms';
import { ETechnology, getTechnology } from '../../../../../core/enums/technologies';
import { IProject } from '../../../../../core/models/project';

export default function FeedProjectStats(props: { project: IProject }) {

    const { category, technologies, repository } = props.project;

    function getTechnologiesString(technologies: ETechnology[]): string {
        return technologies.map(t => getTechnology(t)).join(', ');
    }

    return (
        <div className="d-flex">
            <div className="d-flex flex-column mr-5">
                <span className="feed-label">Category</span>
                <span className="feed-list-item">{getProjectCategory(category)}</span>
            </div>
            <div className="d-flex flex-column mr-5">
                <span className="feed-label">Technologies</span>
                <span className="feed-list-item">{getTechnologiesString(technologies)}</span>
            </div>
            <div className="d-flex flex-column">
                <span className="feed-label">Repository</span>
                <span className="feed-list-item"><a href={repository.url} target="_blank" rel="noopener noreferrer">{getRepositoryPlatform(repository.platform)}</a></span>
            </div>
        </div>
    )
}
