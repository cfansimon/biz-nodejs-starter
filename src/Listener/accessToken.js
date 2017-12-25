'use strict';

export default function accessToken(biz) {
  return async function (ctx, next) {

    let whiteList = ['/', '/access_token'];

    if (!whiteList.includes(ctx.path)) {
      let xAppKey = ctx.header['x-app-key'];
      let xAccessToken = ctx.header['x-access-token'];

      if (!xAppKey || !xAccessToken) {
        throw new Error('Missing app key or access token');
      }

      let appService = biz.service('App.AppService');
      await appService.verifyAccessToken(xAppKey, xAccessToken);
    }

    await next();
  }
}
