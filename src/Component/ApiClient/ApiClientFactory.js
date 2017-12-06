'use strict';

import BizAware from 'Biz/BizAware';
import AppV1ApiClient from './AppV1ApiClient';

export default class ApiClientFactory extends BizAware {

  constructor() {
    super();
    this.cached = {};
  }

  create(type) {

    if (!this.cached[type]) {
      let clientClass = this.clients(type);

      if (!clientClass) {
        throw new Error(`Invalid ApiClient type#${type}`);
      }

      let instance = new clientClass();
      instance.setBiz(this.biz);

      this.cached[type] = instance;
    }

    return this.cached[type];
  }

  clients(type) {
    let clients = {
      app_v1_api_client: AppV1ApiClient
    };

    return clients[type] ? clients[type] : null;
  }
}
