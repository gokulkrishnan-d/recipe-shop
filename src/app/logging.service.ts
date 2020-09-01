// tslint:disable-next-line:no-unused-expression
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
