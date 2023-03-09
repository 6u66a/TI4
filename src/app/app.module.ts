import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatIconModule } from '@angular/material/icon';
import { TechHelperComponent } from './tech-helper/tech-helper.component';
import { HttpClientModule } from "@angular/common/http";
import { TechPickerComponent } from './tech-helper/tech-picker/tech-picker.component';
import { TechComponent } from './tech-helper/tech/tech.component';
import { TechColorComponent } from './tech-helper/tech-color/tech-color.component';
import { DraftComponent } from './draft/draft.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechHelperComponent,
    TechPickerComponent,
    TechComponent,
    TechColorComponent,
    DraftComponent
  ],
  imports: [
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
