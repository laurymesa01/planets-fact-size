import { Component, signal } from '@angular/core';
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  planets = signal([]);

}
