'use strict';

export default function accessToken(biz) {
  return async function (ctx, next) {
    //todo verify access_token with some service
    await next();
  }
}
