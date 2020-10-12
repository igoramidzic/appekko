import React, { useState } from 'react'
import './project.scss';
import { IProject } from '../../../../core/models/project';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import Flag from '../../flag/flag';
import { EFlagSizes, EFlagTypes } from '../../../../core/enums/flags';
import { Link } from 'react-router-dom';
import faker from 'faker';

export interface IProjectProps {
    project: IProject;
}

function Description(props: { description: string }) {
    const { description } = props;

    const [expanded, setExpanded] = useState(false);

    const toggleLines = (event: any) => {
        event.preventDefault();
        setExpanded(!expanded);
    }

    return (
        <div>
            <Truncate
                lines={!expanded && 3}
                ellipsis={(
                    <span>... <a style={{ fontWeight: 500, fontSize: '0.9rem' }} href='#' onClick={toggleLines}>Show More</a></span>
                )}
                onTruncate={console.log}
            >
                {description}
            </Truncate>
        </div>
    );
}


export default function Project(props: IProjectProps) {
    const { project } = props;
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex align-items-start">
                        <div className="pro-pic-container mr-3">
                            <Link to="/">
                                <img className="pro-pic" src={project.owner.profilepicUrl} alt="" />
                            </Link>
                        </div>

                        <div className="d-flex flex-column pt-1">
                            <h5 className="mb-1"><Link to="/">{project.owner.fullName}</Link></h5>
                            <span className="hint">{project.owner.school}</span>
                        </div>

                    </div>
                    <span className="hint">
                        <Moment fromNow>{project.startDate}</Moment>
                    </span>
                </div>

                <hr className="my-3" />

                <div className="d-flex align-items-center mb-4">
                    <h5 className="mb-0 mr-2"><Link to="/">{project.name}</Link></h5>
                    <Flag type={EFlagTypes.Project} size={EFlagSizes.Small}></Flag>
                </div>


                <div className="d-flex mb-3">
                    <div className="d-flex flex-column mr-5">
                        <h6 className="mb-1">Category</h6>
                        <h5>{project.category}</h5>
                    </div>
                    <div>
                        <h6 className="mb-1">Technologies</h6>
                        <h5>{project.technologies[0]}</h5>
                    </div>
                </div>

                <Description description={project.description}></Description>
            </div>
        </div>
    )
}
