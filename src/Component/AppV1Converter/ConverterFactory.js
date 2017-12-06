'use strict';

import BizAware from 'Biz/BizAware';
import SomeConverter from './SomeConverter';

export default class ConverterFactory extends BizAware {

  constructor() {
    super();
    this.cached = {};
  }

  create(type) {

    if (!this.cached[type]) {
      let clientClass = this.clients(type);

      if (!clientClass) {
        throw new Error(`Invalid Converter type#${type}`);
      }

      let instance = new clientClass();
      instance.setBiz(this.biz);

      this.cached[type] = instance;
    }

    return this.cached[type];
  }

  clients(type) {
    let clients = {
      some_name: SomeConverter
    };

    return clients[type] ? clients[type] : null;
  }
}
