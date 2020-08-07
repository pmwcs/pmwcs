export class EventEmitter {
  constructor () {
    this.events_ = {};
  }
  on(event, cb) {
    this.events_ = this.events_ || {};
    this.events_[event] = this.events_[event] || [];
    this.events_[event].push(cb);
  }
  off(event, cb) {
    this.events_ = this.events_ || {};
    if (event in this.events_ === false) return;
    this.events_[event].splice(this.events_[event].indexOf(cb), 1);
  }
  trigger(event, ...args) {
    this.events_ = this.events_ || {};
    if (event in this.events_ === false) return;
    for (var i = 0; i < this.events_[event].length; i++) {
      this.events_[event][i].apply(
        this,
        args
      );
    }
  }
}

export class ArrayEmitter extends EventEmitter {
  constructor () {
    super()
    this.array = [];
  }
  push(...items) {
    const rVal = this.array.push(...items);
    this.trigger('change');
    return rVal;
  }
  empty() {
    this.array.length = 0;
    this.trigger('change');
  }
  remove(item) {
    const index = this.array.indexOf(item);

    if (index > -1) {
      this.array.splice(index, 1);
      this.trigger('change');
      return true;
    }
    return false;
  }
}
