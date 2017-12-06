'use strict';

import compose from 'koa-compose';
import accessToken from './accessToken';

export default function listener(biz) {
  return compose([
    accessToken(biz)
  ]);
}
