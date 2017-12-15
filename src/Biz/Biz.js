'use strict';

import Bottle from 'bottlejs';
import Scanner from 'Biz/Scanner';
import Mongoose from 'Biz/Mongoose';
import LoggerUtil from 'Common/LoggerUtil';

export default class Biz {
  
  constructor(config) {

    this.logger = LoggerUtil.create('biz');
    this.bottle = new Bottle();
    this.mongoose = new Mongoose(config.mongodb);

    Scanner.scanServices(config.app.root_path).forEach(cfg => {
      this.bottle.factory(cfg[0], (container) => {
        return new cfg[1](this);
      });
    });

    Scanner.scanDaos(config.app.root_path).forEach(cfg => {
      this.mongoose.setModel(cfg[0], cfg[1]);
    });

    for (let key in config) {
      this[key] = config[key];
    }
  }

  get(name) {
    if (this[name]) {
      return this[name];
    }

    return this.bottle.container[name];
  }

  set(name, obj) {
    if (typeof obj == 'function') {
      this.bottle.factory(name, (container) => {
        return obj(this);
      });
    } else {
      this[name] = obj;
    }
  }

  register(provider) {
    provider.register(this);

    return this;
  }

  service(name) {
    let cfg = name.substr(0, name.length - 'Service'.length).split('.');
    return this.bottle.container[cfg[0]][cfg[1]];
  }

  dao(name) {
    name = name.substr(0, name.length - 'Dao'.length);
    return this.mongoose.getModel(name);
  }

  db() {
    return this.mongoose.getConnection();
  }
}
