'use strict';

import Koa from 'koa';
import middlewareConfig from 'Config/middleware';
import listener from 'Listener';
import bizConfig from 'Config/biz';
import Biz from 'Biz/Biz';
import DefaultServiceProvider from 'Biz/DefaultServiceProvider';
import routes from './routes';
import LoggerUtil from 'Common/LoggerUtil';

const logger = LoggerUtil.create('app');

let app = new Koa();
middlewareConfig(app);

let biz = new Biz(bizConfig);
biz.register(new DefaultServiceProvider());

app.use(listener(biz));
app.use(routes());
app.context.biz = biz;
app.context.logger = logger;

app.listen(bizConfig.app.port);

logger.info("Server started, listening on port: " + bizConfig.app.port);

export default app;
