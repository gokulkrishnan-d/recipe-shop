import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activateBoo = false;
  activaredSub: Subscription;
  constructor(private userSer: UserService) {}
  ngOnDestroy(): void {
    this.activaredSub.unsubscribe();
  }

  ngOnInit() {
    this.activaredSub = this.userSer.activatedEmitter.subscribe(
      (data) => {
        this.activateBoo = data;
      }
    );
  }
}
