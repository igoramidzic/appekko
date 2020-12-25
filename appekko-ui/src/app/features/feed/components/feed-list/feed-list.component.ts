import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { IFeedEvent } from '../../models/feed-event';
import { EFeedEventType } from '../../enums/feed';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  fetchingFeed: boolean;
  errorFetchingFeed: boolean;

  feed: IFeedEvent[] | null;
  EFeedEventType = EFeedEventType;

  constructor(private feedService: FeedService) {
    this.fetchingFeed = false;
    this.errorFetchingFeed = false;
    this.feed = null
  }

  ngOnInit(): void {
    this.getFeed();
  }

  async getFeed(): Promise<void> {
    this.fetchingFeed = true;
    this.errorFetchingFeed = false;
    try {
      this.feed = await this.feedService.getFeed()
    } catch (e) {
      this.errorFetchingFeed = true;
    }
    this.fetchingFeed = false;
  }
}
