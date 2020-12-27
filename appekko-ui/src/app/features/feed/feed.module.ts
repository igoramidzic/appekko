import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FEED_ROUTES } from './feed.routes';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUnauthenticatedComponent } from './components/profile-unauthenticated/profile-unauthenticated.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { FeedComponent } from './feed.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedProjectComponent } from './components/feed-list/feed-project/feed-project.component';
import { EmptyFeedComponent } from './components/feed-list/empty-feed/empty-feed.component';
import { ErrorFeedComponent } from './components/feed-list/error-feed/error-feed.component';
import { FetchingFeedComponent } from './components/feed-list/fetching-feed/fetching-feed.component';
import { ProjectHeaderComponent } from './components/feed-list/feed-project/project-header/project-header.component';
import { ProjectStatsComponent } from './components/feed-list/feed-project/project-stats/project-stats.component';
import { ProjectContentComponent } from './components/feed-list/feed-project/project-content/project-content.component';
import { NewFeedEventFormComponent } from './components/new-feed-event-form/new-feed-event-form.component';

@NgModule({
    declarations: [
        FeedComponent,
        FeedPageComponent,
        ProfileComponent,
        ProfileUnauthenticatedComponent,
        FeedListComponent,
        FeedProjectComponent,
        EmptyFeedComponent,
        ErrorFeedComponent,
        FetchingFeedComponent,
        ProjectHeaderComponent,
        ProjectStatsComponent,
        ProjectContentComponent,
        NewFeedEventFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(FEED_ROUTES),
    ],
    exports: [
    ],
    providers: [],
})
export class FeedModule { }
