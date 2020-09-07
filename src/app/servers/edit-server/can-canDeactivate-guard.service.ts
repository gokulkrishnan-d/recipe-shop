import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanDeactivateService {

    canDeactivate: () => Observable<boolean> | boolean | Promise<boolean>;
}

export class CanDeactivateGuard implements CanDeactivate<CanDeactivateService> {
    canDeactivate(component: CanDeactivateService,
                  currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): boolean | Observable<boolean>  | Promise<boolean> {
       return component.canDeactivate();
    }
}
