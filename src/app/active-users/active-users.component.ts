import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();


 constructor(private userSer: UsersServices) {}
  ngOnInit(): void {
    this.users = this.userSer.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userSer.onSetToInactive(id);
  }
}
