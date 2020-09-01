import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

// @Injectable({ if its not injected , provider injection  should be done in components or if u r loading any other service
//   providedIn: 'root'
// })

@Injectable()
export class AccountService {

  constructor(private loggingService: LoggingService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  addAccounts(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateAccounts(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
