import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './draft/draft.component';
import { HomeComponent } from './home/home.component';
import { TechHelperComponent } from './tech-helper/tech-helper.component';
import { TechPickerComponent } from './tech-helper/tech-picker/tech-picker.component';

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
    path: 'tech/:raceid',
    component: TechPickerComponent
  },
  {
    path: 'draft',
    component: DraftComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
