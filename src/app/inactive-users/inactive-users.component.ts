import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userSer: UsersServices) {}

  ngOnInit(): void {
    this.users = this.userSer.inactiveUsers;
  }
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userSer.onSetToActive(id);
  }
}
