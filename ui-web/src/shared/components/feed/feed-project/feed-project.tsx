import React from 'react'
import { IProject } from '../../../../core/models/project';
import Flag from '../../flag/flag';
import { EFlagSizes, EFlagTypes } from '../../../../core/enums/flags';
import { Link } from 'react-router-dom';
import FeedHeader from '../feed-event-header/feed-event-header';
import FeedProjectStats from './feed-project-stats/feed-project-stats';
import FeedEventContent from '../feed-event-content/feed-event-content';

export interface IProjectProps {
    project: IProject;
}

export default function FeedProject(props: IProjectProps) {
    const { project } = props;

    return (
        <div className="card">
            <div className="card-body">
                <FeedHeader author={project.owner} eventDate={project.startDate}></FeedHeader>

                <hr className="my-2" />

                <div className="d-flex align-items-center mb-3">
                    <span className="feed-event-title"><Link to="/">{project.name}</Link></span>
                    <div className="ml-3 mb-2">
                        <Flag type={EFlagTypes.Project} size={EFlagSizes.Small}></Flag>
                    </div>
                </div>

                <div className="mb-4">
                    <FeedProjectStats project={project}></FeedProjectStats>
                </div>

                <FeedEventContent text={project.description}></FeedEventContent>
            </div>
        </div>
    )
}
