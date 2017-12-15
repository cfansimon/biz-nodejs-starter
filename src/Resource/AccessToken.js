'use strict';

import BaseResource from './BaseResource';
import ObjectUtil from 'Common/ObjectUtil';

export default class AccessToken extends BaseResource {

  async get(ctx, next) {
    
    let query = ctx.request.query;
    if (!ObjectUtil.requires(query, ['app_key', 'app_secret'])) {
      ctx.throw('Miss required parameters');
    }

    let accessToken = await this.getAppService().getAccessToken(query.app_key, query.app_secret);
  
    ctx.body = this.createResourceResponse(accessToken);
  }

  getAppService() {
    return this.createService('App.AppService');
  }
}
