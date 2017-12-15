'use strict';

import mongoose from 'mongoose';
import LoggerUtil from 'Common/LoggerUtil';

export default class Mongoose {

  constructor(config) {

    mongoose.Promise = global.Promise;
    const connstr = `mongodb://${config.host}:${config.port}/${config.database}`;
    mongoose.connect(connstr, {
      useMongoClient: true,
      poolSize: 10
    });

    mongoose.connection.on('error', (err) => {
      this.logger.error(err);
      throw new Error(err);
    });
    mongoose.connection.once('open', () => {
      this.logger.info(`mongodb ${connstr} connection opend`);
    });

    this.logger = LoggerUtil.create('mongoose');
    this.mongoose = mongoose;
    this.db = mongoose.connection;
  }

  setModel(name, schema) {
    this.mongoose.model(name, schema);
  }

  getModel(name) {
    return this.mongoose.model(name);
  }

  getConnection() {
    return this.db;
  }
}
