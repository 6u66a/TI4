import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {RaceChooserComponent} from './race-chooser/race-chooser.component';
import {TechPickerComponent} from './tech-picker/tech-picker.component';
import {TechComponent} from './tech-picker/tech/tech.component';
import {TechColorComponent} from './tech-picker/tech-color/tech-color.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {RandomizerComponent} from './randomizer/randomizer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "../material.module";
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
    {
        path: '',
        component: MenuComponent,
        pathMatch: 'full'
    },
    {
        path: 'choose',
        component: RaceChooserComponent,
    },
    {
        path: 'choose/:raceid',
        component: TechPickerComponent
    },
    {
        path: 'randomize',
        component: RandomizerComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        RaceChooserComponent,
        TechPickerComponent,
        TechComponent,
        TechColorComponent,
        RandomizerComponent,
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production
        }),
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
