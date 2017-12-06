'use strict';

import winston from 'winston';
import 'winston-daily-rotate-file';
import bizConfig from 'Config/biz';

export default class LoggerUtil {

  static create(name) {

    return new (winston.Logger)({
      transports: [
        new (winston.transports.DailyRotateFile)({
          filename: `${bizConfig.app.log_path}/${name}.log`,
          datePattern: 'yyyy-MM-dd.',
          prepend: true,
          // localTime: true,
          maxDays: 15
        })
      ]
    });
  }
}
