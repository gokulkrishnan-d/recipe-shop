export class CounterService {
  inactiveCount = 0;
  activeCount = 0;

  addInactive() {
    this.inactiveCount = this.inactiveCount + 1;
    console.log('TO Inactive ' + this.inactiveCount);
  }
  addActive() {
    this.activeCount = this.activeCount + 1;
    console.log('TO Active ' + this.activeCount);
  }
}
