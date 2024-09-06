import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({import { Component } from '@angular/core'
  import { RegisterComponent } from './register/component-register.component'; // Adjust path if necessary
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RegisterComponent]
  })
  export class AppComponent {
    title = 'Your App Title'; // Your existing code
  }