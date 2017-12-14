'use strict';

import BaseCommand from 'Command/BaseCommand';
import moment from 'moment';

/**
 * 每日解析定时任务集合
 */
export default class CronParseTask extends BaseCommand {

  async run(argv) {

    console.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] CronParseTask started`);
    let startTime = moment();

    //业务逻辑
    console.log('xxx');

    let endTime = moment();
    console.log(`CronParseTask total process time: ${endTime - startTime}ms`);
    return true;
  }
}
