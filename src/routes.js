'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import routing from 'Config/routing';

const router = new Router();

routing.forEach(cfg => {
  router[cfg[0].toLowerCase()](cfg[1], cfg[2]);
});

export default function routes() {
  return compose([
    router.routes(),
    router.allowedMethods()
  ]);
};
