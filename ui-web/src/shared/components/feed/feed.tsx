import React, { useContext, useEffect, useState } from 'react'
import { EFeedEventType } from '../../../core/enums/feed';
import { IAd } from '../../../core/models/ad';
import { IFeedEvent } from '../../../core/models/feed';
import { IProject } from '../../../core/models/project';
import FeedAd from './feed-ad/feed-ad';
import FeedProject from './feed-project/feed-project';
import './feed.scss';
import { FirebaseContext } from '../../../context/firebase';
import { ERepositoryPlatform } from '../../../core/enums/repositoryPlatforms';
import faker from 'faker';

export default function Feed() {
    const [eventElems, setEventElems] = useState<JSX.Element[]>([]);

    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        getEvents();
    }, [])

    function getEvents(): void {
        firebase.firestore.collection('projects').orderBy('created', "desc").get()
            .then(async (snapshot) => {
                let newEvents: IFeedEvent[] = [];

                let docs = snapshot.docs;

                for (let i = 0; i < docs.length; i++) {
                    let doc = docs[i];

                    let data = doc.data();
                    let author = (await data.author.get()).data(); // This is not doing syncronously so it jumps to 54

                    newEvents.push({
                        type: EFeedEventType.Project,
                        event: {
                            name: data.name,
                            description: data.description,
                            owner: {
                                fullName: author.fullName,
                                profilepicUrl: author.profilepicUrl,
                                school: author.school
                            },
                            repository: {
                                platform: ERepositoryPlatform.Github,
                                url: data.repository.url
                            },
                            startDate: data.created.toDate(),
                            technologies: data.technologies,
                            category: data.category
                        }

                    });
                }

                a(newEvents);
            })
            .catch((err) => console.error(err));
    }

    function a(events: IFeedEvent[]) {
        console.log(events)
        let eventElems = [];
        for (let i = 0; i < events.length; i++) {
            switch (events[i].type) {
                case EFeedEventType.Project:
                    eventElems.push(<div key={i} className="mb-3"><FeedProject project={(events[i].event as IProject)}></FeedProject></div>)
                    break;
                case EFeedEventType.Ad:
                    eventElems.push(<div key={i} className="mb-3"><FeedAd ad={(events[i].event as IAd)}></FeedAd></div>)
                    break;
                default:
                    break;
            }
        }

        setEventElems(eventElems);
    }


    return (
        <div>
            {eventElems}
        </div>
    )
}
