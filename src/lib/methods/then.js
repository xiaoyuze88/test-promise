import constant from '../constant';
import core from '../core';

function then(onFulfill, onRejected) {
  const promise = this;

  switch (promise.state) {
    case constant.STATE_PENDING:
      break;
    case constant.STATE_FULFILLED:
      break;
    case constant.STATE_REJECTED:
      break;
    default:
      throw new Error(`Unexpected Promise state: ${promise.state}.`);
  }
}

export default then;
