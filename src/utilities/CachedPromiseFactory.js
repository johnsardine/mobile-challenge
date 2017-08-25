export default class CachedPromiseFactory {
  constructor() {
    this.setDefault([]);
    this.setComplete(false);
    this.setInProgress(false);
    this.resetWaitList();
    this.defaultReturn = Promise.resolve();
  }

  setData(data) {
    this.data = data;
  }

  /*
   * Set inProgress flag
   */
  setInProgress(inProgress) {
    this.inProgress = inProgress;
  }

  /*
   * Set complete flag
   */
  setComplete(complete) {
    this.fetchComplete = complete;
  }

  /*
   * Stores promises waiting to be resolved
   */
  resetWaitList() {
    this.waitList = [];
  }
  postpone(resolve) {
    this.waitList.push(resolve);
  }
  fulfill(data) {
    this.waitList.forEach(waitingPromise => waitingPromise(data));
  }

  /*
   * Specifies default data
   */
  setDefault(data) {
    this.default = data;
    this.setData(data);
  }

  /*
   * Flushes stored data
   * Resets status
   */
  flush() {
    this.data = this.default;
    this.setComplete(false);
  }

  /*
   * Returns a promise
   * Will return cached data if exists
   * Will fetch from network if not
   * Any concurrent requests will be put
   * on waitList and fulfilled when fetch is done
   */
  toPromise() {
    return () => new Promise((resolve) => {
      if (this.fetchComplete || this.inProgress) {
        if (this.inProgress) {
          this.postpone(resolve);
        } else {
          resolve(this.data);
        }
      } else {
        this.setInProgress(true);
        this.fetchData()
        .then((response) => {
          this.setComplete(true);
          this.setData(response);
          resolve(this.data);
          this.fulfill(this.data);
          this.resetWaitList();
          this.setInProgress(false);
        });
      }
    });
  }

  /*
   * Function to be overriten by child class
   * Should return a promise that returns the data to be saved
   */
  fetchData() {
    return this.defaultReturn;
  }
}
