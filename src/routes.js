'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import routing from 'Config/routing';

export default function routes(biz) {

  const router = new Router();

  routing.forEach(cfg => {
    let resource = new cfg[0](biz);
    let routing = cfg[1];

    for (let method in routing) {
      router[method](routing[method], resource[method].bind(resource));
    }
  });

  return compose([
    router.routes(),
    router.allowedMethods()
  ]);
};
