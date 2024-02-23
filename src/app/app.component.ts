import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PayApplicationDisplayComponent } from './components/pay-application-display/pay-application-display';
import { HttpClientModule } from '@angular/common/http';
import { TokenGenerator } from './services/token.service';
import { PayApplicationCreateComponent } from './components/pay-application-create/pay-application-create';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
              RouterOutlet,
              RouterLink,
              PayApplicationDisplayComponent,
              PayApplicationCreateComponent
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assesment-test';
}
