import React from 'react'
import { Link } from 'react-router-dom';
import { IAd } from '../../../../core/models/ad';
import { IProject } from '../../../../core/models/project';
import FeedEventContent from '../feed-event-content/feed-event-content';

export interface IProjectProps {
    project: IProject;
}

export default function FeedAd(props: { ad: IAd }) {
    const { ad } = props;

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex align-items-start">
                        <div className="feed-header-propic-wrapper mr-3">
                            <Link to="/">
                                <img className="feed-header-propic" src={ad.owner.profilepicUrl} alt="" />
                            </Link>
                        </div>

                        <div className="d-flex flex-column pt-1">
                            <span className="feed-header-author-name"><Link to="/">{ad.owner.fullName}</Link></span>
                        </div>
                    </div>
                    Ad
                </div>

                <hr className="my-2" />

                <FeedEventContent text={ad.description}></FeedEventContent>
            </div>
        </div>
    )
}
