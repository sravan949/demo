import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-inteceptor-demo';

  constructor(private demoService: DemoService) {}

  clickHandler() {
    this.demoService.getData().subscribe((data) => {
      console.log('Success', data);
    });
  }
}
