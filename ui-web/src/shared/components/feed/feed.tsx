import React from 'react'
import { EFeedEventType } from '../../../core/enums/feed';
import { IAd } from '../../../core/models/ad';
import { IFeedEvent } from '../../../core/models/feed';
import { IProject } from '../../../core/models/project';
import FeedAd from './feed-ad/feed-ad';
import FeedProject from './feed-project/feed-project';
import './feed.scss';

export default function Feed(props: { events: IFeedEvent[] }) {
    const { events } = props;

    const list: JSX.Element[] = [];

    for (let i = 0; i < events.length; i++) {
        switch (events[i].type) {
            case EFeedEventType.Project:
                list.push(<div key={i} className="mb-3"><FeedProject project={(events[i].event as IProject)}></FeedProject></div>)
                break;
            case EFeedEventType.Ad:
                list.push(<div key={i} className="mb-3"><FeedAd ad={(events[i].event as IAd)}></FeedAd></div>)
                break;
            default:
                break;
        }
    }

    return (
        <div>
            {list}
        </div>
    )
}
