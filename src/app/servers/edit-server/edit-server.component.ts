import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateService } from './can-canDeactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateService {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit =  false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute, private router: Router) { }
  canDeactivate() {
    if (!this.allowEdit) {
      return true;
    } else if ((this.server.name !== this.serverName || this.server.status !== this.serverStatus) && !this.changesSaved) {
       return confirm('Do you want to Discard the changes?');
    } else {
      return true;
    }
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams, this.route.snapshot.fragment );
    this.route.queryParams.subscribe(
      (param: Params) => {
        this.allowEdit = param.allowEdit === '1' ?  true : false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(this.route.snapshot.params.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.router.navigate(['/servers', this.server.id], {queryParamsHandling: 'preserve', preserveFragment: true});
    this.changesSaved = true;
    // this.router.navigate(['../'], {relativeTo: this.route});
  }


}
