'use strict';

/**
 * this is a sample file
 */
import AbstractApiClient from './AbstractApiClient';
import LoggerUtil from 'Common/LoggerUtil';

export default class AppV1ApiClient extends AbstractApiClient {

  constructor() {
    super();
    this.appId = 'othersiteappid';
    this.secret = 'othersitesecret';
    this.gateway = 'http://otherapi.othersite.com';
    this.logger = null;
  }

  async getAccessToken() {

    let cacheName = 'app_v1_api_access_token';

    let accessToken = await this.getCacheService().get(cacheName);

    if (!accessToken) {
      let data = await this.callApi('GET', '/access_token', {
        app_key: this.appId,
        app_secret: this.secret
      }, {}, false);

      accessToken = data['resource'];
      await this.getCacheService().set(cacheName, accessToken);
    }

    return accessToken;
  }

  async findUsers(params) {
    return await this.callApi('GET', '/users', params);
  }

  async callApi(method, api, params = {}, headers = {}, needAccessToken = true) {

    let defaultHeaders = {
      'x-app-key': this.appId,
    };

    if (needAccessToken) {
      defaultHeaders['x-access-token'] = await this.getAccessToken();
    }

    headers = Object.assign(defaultHeaders, headers);

    let response = await this.sendRequest(method, `${this.gateway}${api}`, params, headers);

    let data = {};
    try {
      data = JSON.parse(response);
    } catch(err) {
      throw new Error(`api#${api} return error, not json: ${response}`);
    }

    if (typeof data['errcode'] != 'undefined' && 0 != data['errcode']) {
      throw new Error(`api#${api} return error, error code: ${data['errcode']}, message: ${data['errmsg']}`);
    }

    return data;
  }

  getLogger() {
    if (!this.logger) {
      this.logger = LoggerUtil.create('app_v1_api');
    }
    return this.logger;
  }

  getCacheService() {
    return this.createService('Common.CacheService');
  }
}
