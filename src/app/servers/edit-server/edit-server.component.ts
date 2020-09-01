import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit =  false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute, private router: Router) { }

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
  }

}