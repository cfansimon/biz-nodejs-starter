'use strict';

import BizAware from 'Biz/BizAware';
import request from 'request';

export default class AbstractApiClient extends BizAware {

  /**
   * Implementation required
   */
  getLogger() {
    throw new Error('You must implement the method `getLogger()`');
  }

  sendRequest(method, url, params = {}, headers = {}) {

    method = method.toUpperCase();

    let options = {
      method: method,
      uri: url,
      headers: Object.assign({
        'User-Agent': 'Benzuo Stock DataCenter API Client/1.0.0 (datacenter.benzuo.com)'
      }, headers),
      timeout: 30 * 1000
    };


    if (method == 'POST') {
      let postParams = [];
      for (let key in params) {
        postParams.push({
          name: key,
          value: params[key]
        });
      }

      Object.assign(options, {
        postData: {
          mimeType: 'application/x-www-form-urlencoded',
          params: postParams
        }
      });
    } else {
      url = url + '?' + Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');
      Object.assign(options, {
        uri: url
      });
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {

        if (error) {
          throw new Error(`ApiClient Error: ${error}`);
        }

        if (response.statusCode != 200) {
          throw new Error(`ApiClient StatusCode Error: ${response.statusCode}, ${body}`);
        }

        resolve(body);
      });

      if (method == 'POST') {
        this.getLogger().info(`${method} ${url}, params: ${JSON.stringify(params)}, headers: ${JSON.stringify(headers)}`);
      } else {
        this.getLogger().info(`${method} ${url}, headers: ${JSON.stringify(headers)}`);
      }

    });
  }

  createService(name) {
    return this.biz.service(name);
  }
}
