'use strict';

import ObjectUtil from 'Common/ObjectUtil';
import ResponseUtil from 'Common/ResponseUtil';

const AccessToken = {

  get: async (ctx, next) => {

    let query = ctx.request.query;
    if (!ObjectUtil.requires(query, ['app_key', 'app_secret'])) {
      ctx.throw('Miss required parameters');
    }

    let appService = ctx.biz.service('App.AppService');
    let accessToken = await appService.getAccessToken(query.app_key, query.app_secret);

    ctx.body = ResponseUtil.createResourceResponse(accessToken);
  }
};

export default AccessToken;
