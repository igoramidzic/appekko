import { Routes } from '@angular/router';
import { FeedComponent } from './feed.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';

export const FEED_ROUTES: Routes = [
    {
        path: '',
        component: FeedComponent,
        children: [
            {
                path: '',
                component: FeedPageComponent
            }
        ]
    }
];
