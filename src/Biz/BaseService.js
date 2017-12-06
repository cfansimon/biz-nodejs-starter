'use strict';

export default class BaseService {
  
  constructor(biz) {
    this.biz = biz;
  }

  createService(name) {
    return this.biz.service(name);
  }

  createDao(name) {
    return this.biz.dao(name);
  }

  getLogger() {
    return this.biz.logger;
  }
}
