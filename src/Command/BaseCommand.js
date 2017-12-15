'use strict';

export default class BaseCommand {

  constructor(biz) {
    this.biz = biz;
  }

  createService(name) {
    return this.biz.service(name);
  }
}
