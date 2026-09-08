import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './draft/draft.component';
import { HomeComponent } from './home/home.component';
import { TechHelperComponent } from './tech-helper/tech-helper.component';
import { SettingsComponent } from './settings/settings.component';
import { SliceGeneratorComponent } from './slice-generator/slice-generator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'tech',
    component: TechHelperComponent,
  },
  {
    path: 'draft',
    component: DraftComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'slice',
    component: SliceGeneratorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
