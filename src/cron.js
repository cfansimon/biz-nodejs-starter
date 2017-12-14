"use strict";

import cron from 'node-cron';
import bizConfig from 'Config/biz';
import Biz from 'Biz/Biz';
import moment from 'moment';
import DefaultServiceProvider from "Biz/DefaultServiceProvider";
import CronParseTask from 'Command/CronParseTask';

let biz = new Biz(bizConfig);
biz.register(new DefaultServiceProvider());

cron.schedule('*/10 17-19 * * *', async () => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] cron at */10 17-19 * * * triggered`);
  await new CronParseTask(biz).run([]);
});

console.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] cron service started`);