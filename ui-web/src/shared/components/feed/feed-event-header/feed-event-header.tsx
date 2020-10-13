import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { IAuthor } from '../../../../core/models/project';

export default function FeedHeader(props: { author: IAuthor; eventDate: Date; }) {
    const { author, eventDate } = props;

    return (
        <div className="d-flex align-items-start justify-content-between">
            <div className="d-flex align-items-start">
                <div className="feed-header-propic-wrapper mr-3">
                    <Link to="/">
                        <img className="feed-header-propic" src={author.profilepicUrl} alt="" />
                    </Link>
                </div>

                <div className="d-flex flex-column pt-1">
                    <span className="feed-header-author-name"><Link to="/">{author.fullName}</Link></span>
                    <span className="feed-header-author-description">{author.school}</span>
                </div>

            </div>
            <span className="feed-header-event-date">
                <Moment fromNow>{eventDate}</Moment>
            </span>
        </div>
    )
}
