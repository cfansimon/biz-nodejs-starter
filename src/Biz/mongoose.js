'use strict';

import mongoose from 'mongoose';
import bizConfig from 'Config/biz';
import LoggerUtil from 'Common/LoggerUtil';
import Scanner from 'Biz/Scanner';

const logger = LoggerUtil.create('mongoose');

mongoose.Promise = global.Promise;
const connstr = `mongodb://${bizConfig.mongodb.host}:${bizConfig.mongodb.port}/${bizConfig.mongodb.database}`;
mongoose.connect(connstr, {
  useMongoClient: true,
  poolSize: 10
});

let db = mongoose.connection;
db.on('error', (err) => {
  logger.error(err);
  throw new Error(err);
});
db.once('open', () => {
  logger.info(`mongodb ${connstr} connection opend`);
});

Scanner.scanDaos().forEach(cfg => {
  mongoose.model(cfg[0], cfg[1]);
});

export default mongoose;
