import Promise from '../dist/test-promise';
import {expect} from 'chai';

describe('Constructor works well', () => {
  it('Promise构造函数拥有静态方法: all, resolve, reject, race', () => {
    expect(Promise).to.not.empty;
    expect(Promise.all).to.be.an.instanceOf(Function);
    expect(Promise.resolve).to.be.an.instanceOf(Function);
    expect(Promise.reject).to.be.an.instanceOf(Function);
    expect(Promise.race).to.be.an.instanceOf(Function);
  });

  it('Promise实例有then, catch方法', () => {
    var promise = new Promise(() => {
    });

    expect(promise.then).to.be.an.instanceOf(Function);
    expect(promise.catch).to.be.an.instanceOf(Function);
  });

  it('Promise构造函数必须接受一个函数, 并且必须通过new关键字实例化', () => {
    try {
      new Promise();
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error);
    }

    var p;
    try {
      p = new Promise(() => {
      })
    } catch (e) {
    }

    expect(p).to.be.an.instanceOf(Promise);

    try {
      Promise()
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error);
    }
  });

  it('同步的resolve, 下一个then可以接受value', () => {
    new Promise((resolve, reject) => {
      resolve('hi');
    }).then((val) => {
      expect(val).to.equal('hi');
    });
  });
});
