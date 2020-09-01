import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name // if you use snapShot u will get that instance data
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
          this.user.id = params.id;
          this.user.name = params.name;
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  // ngDoCheck(): void {
  //   // Called every time that the input properties of a component or a directive are checked.
  //   // Use it to extend change detection by performing a custom check.
  //   // Add 'implements DoCheck' to the class.
  //   this.user = {
  //     id: this.route.snapshot.params.id,
  //     name: this.route.snapshot.params.name // if you use snapShot u will get that instance data
  //   };
  // }

}
