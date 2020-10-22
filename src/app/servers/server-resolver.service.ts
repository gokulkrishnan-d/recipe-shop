import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServerData } from './service.model';
import { Observable } from 'rxjs';
import { ServersService } from './servers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerResolver implements Resolve<ServerData> {

    constructor(private serverSer: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerData | Observable<ServerData> | Promise<ServerData> {
        // throw new Error("Method not implemented.");
        return this.serverSer.getServer(route.params.id);
    }
}
