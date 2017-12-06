'use strict';

import BaseService from 'Biz/BaseService';
import moment from 'moment';
import StringUtil from 'Common/StringUtil';

export default class AppService extends BaseService {

  async getApp(conditions) {
    return await this.getAppDao().findOne(conditions);
  }

  async createApp(app) {
    return await this.getAppDao().create(app);
  }

  async getAccessToken(appKey, appSecret) {
    
    let app = await this.getAppDao().findOne({
      app_key: appKey,
      app_secret: appSecret
    });
  
    if (!app) {
      throw new Error(`App with app_key#${appKey} and app_secret#${appSecret} not found`);
    }
  
    app = await this.getAppDao().findOneAndUpdate({
      _id: app._id
    }, {
      '$set': {
        access_token: StringUtil.createRandomString(32),
        access_token_expired_time: moment().unix() + 60 * 60 * 2, //2小时有效
        updated_time: moment().unix()
      }
    }, {new: true});
  
    return {
      app_key: app.app_key,
      access_token: app.access_token,
      access_token_expired_time: app.access_token_expired_time
    };
  }

  async verifyAccessToken(appKey, accessToken) {
    
    let app = await this.getAppDao().findOne({
      app_key: appKey
    });
  
    if (!app) {
      throw new Error(`App with app_key#${appKey} not found`);
    }
  
    if (accessToken != app.access_token) {
      throw new Error(`Invalid accessToken#${accessToken} of app#${appKey}`);
    }
  
    if (moment().unix() > app.access_token_expired_time) {
      throw new Error(`AccessToken has expired`);
    }
  
    return {
      app_key: app.app_key,
      access_token: app.access_token,
      access_token_expired_time: app.access_token_expired_time
    };
  }

  getAppDao() {
    return this.createDao('App.AppDao');
  }
}
