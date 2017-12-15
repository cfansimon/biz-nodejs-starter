'use strict';

import bizConfig from 'Config/biz_test';
import Biz from 'Biz/Biz';
import DefaultServiceProvider from "Biz/DefaultServiceProvider";

export default class BaseTestCase {

  constructor() {
    this.biz = new Biz(bizConfig);
    this.biz.register(new DefaultServiceProvider());

    describe('UnitTest', () => {
      before(this.before.bind(this));
      after(this.after.bind(this));
      beforeEach(this.beforeEach.bind(this));
      afterEach(this.afterEach.bind(this));

      for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
        if (typeof this[name] === 'function' && name.startsWith('test')) {
          let testCaseMethod = this[name];
          it(name, testCaseMethod.bind(this));
        }
      }
    });
  }

  before() {
  }

  after() {
  }

  beforeEach() {
    let db = this.biz.db();
    db.dropDatabase(this.biz.mongodb.database);
  }

  afterEach() {
  }

  createService(name) {
    return this.biz.service(name);
  }
}
