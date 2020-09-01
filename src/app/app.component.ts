import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNum = [1, 3, 5, 6];
  evenNum = [2, 4];

  onlyOdd = false;
  value = 2;
}
