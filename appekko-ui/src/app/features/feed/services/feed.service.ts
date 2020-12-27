import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from 'src/app/core/models/user.model';
import { IProject } from '../../../core/models/project.model';
import { EFeedEventType } from '../enums/feed';
import { IFeedEvent } from '../models/feed-event';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private afs: AngularFirestore) { }

  async getFeed(): Promise<IFeedEvent[]> {
    let res = await this.afs.collection('projects', ref => ref.orderBy('created', 'desc')).get().toPromise();
    let feed: IFeedEvent[] = [];

    for (let i = 0; i < res.docs.length; i++) {
      let doc = res.docs[i];
      let data = <any>doc.data();
      let author = <IUser>(await (<any>data).author.get()).data();

      feed.push({
        type: EFeedEventType.Project,
        event: { ...<IProject>data, author: author, created: data.created.toDate(), updated: data.updated.toDate() }
      })
    }

    return feed;
  }
}
