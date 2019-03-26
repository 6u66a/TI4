import { Component } from '@angular/core';
import { DATA } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bulma/css/bulma.css']
})
export class AppComponent {

  hamburgerIsActive: Boolean = false;

  hamburgerClick() {
    this.hamburgerIsActive = !this.hamburgerIsActive;
  }
}
