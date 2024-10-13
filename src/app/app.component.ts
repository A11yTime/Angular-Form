import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibleFormComponent } from './accessible-form/accessible-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccessibleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'accessible-form';
}
