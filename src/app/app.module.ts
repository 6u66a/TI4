import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RaceChooserComponent } from './race-chooser/race-chooser.component';
import { TechPickerComponent } from './tech-picker/tech-picker.component';
import { TechDetailComponent } from './tech-detail/tech-detail.component';
import { RaceGuard } from './race.guard';
import { TechComponent } from './tech-picker/tech/tech.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RaceChooserComponent,
    pathMatch: 'full',
  },
  {
    path: 'tech/:raceid',
    canActivate: [RaceGuard],
    component: TechPickerComponent
  },
  {
    path: 'detail',
    component: TechDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RaceChooserComponent,
    TechPickerComponent,
    TechDetailComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ),
  ],
  providers: [
    RaceGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
