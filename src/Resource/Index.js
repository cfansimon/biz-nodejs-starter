'use strict';

import BaseResource from './BaseResource';

export default class Index extends BaseResource {

  async get(ctx, next) {
    // ctx.throw(1001, 'Benzuo Stock Api');
    ctx.body = this.createResourceResponse({
      name: 'biz-nodejs-starter',
      version: '1.0.0'
    });
  }
}
