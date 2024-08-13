import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterContentChecked{

  constructor(private changeDetector: ChangeDetectorRef,){ }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
