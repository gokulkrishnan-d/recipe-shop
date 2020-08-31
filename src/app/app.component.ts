import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  loadedFeature = 'recipe';
  onSelected(feature: string): void{
    this.loadedFeature = feature;
  }
}
