import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (!id) {
      id = 1;
    }
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params.id);
      }
    );
  }

  editServer(): void {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve', preserveFragment: true});
  }

}
