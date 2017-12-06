'use strict';

import cors from 'kcors';
import Logger from 'koa-logger';
import error from 'koa-json-error';
import bodyParser from 'koa-bodyparser';

export default function middleware(app) {

  app.use(cors({ credentials: true }));
  app.use(Logger());
  app.use(bodyParser());
  app.use(error((err) => {
    return {
      errcode: err.status || 500,
      errmsg: err.message,
    };
  }));
}
