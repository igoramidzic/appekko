import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NOT_FOUND_ROUTES } from './not-found.routes';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent,
        NotFoundPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(NOT_FOUND_ROUTES),
    ],
    exports: [
    ],
    providers: [],
})
export class NotFoundModule { }
