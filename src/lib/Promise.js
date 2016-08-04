import promise from './promise/index';
import constant from './constant';
import core from './core';

function ES6Promise(resolver) {
  if (!(this instanceof ES6Promise)) {
    throw new Error('You must use `new` operator to instance Promise');
  }
  if (typeof resolver !== 'function') {
    throw new Error(`You must pass a resolver function as the first argument to 
      the Promise constructor.`);
  }

  this.status = constant.STATUS_PENDING;

  resolver((val) => {
    core.resolve(this, val);
  }, (reason) => {
    core.reject(this, reason);
  });
}

ES6Promise.all = promise.all;
ES6Promise.resolve = promise.resolve;
ES6Promise.reject = promise.reject;
ES6Promise.race = promise.race;

ES6Promise.prototype.constructor = ES6Promise;

ES6Promise.prototype.then = promise.then;

ES6Promise.prototype.catch = promise.promiseCatch;

export default ES6Promise;
