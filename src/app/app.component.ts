import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VaporComponent} from './vapor/vapor.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VaporComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agua';
}
