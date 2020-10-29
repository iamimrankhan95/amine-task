import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amine-task';
  isCollapsed = false;
  size: NzButtonSize = 'large';
}
