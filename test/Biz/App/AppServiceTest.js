'use strict';

import BaseTestCase from 'Biz/BaseTestCase';
import assert from 'assert';

class AppServiceTest extends BaseTestCase {

  async testCreateApp() {

    let app = {
      name: '测试AP',
      code: 'test_app',
      app_key: '123456',
      app_secret: 'abcdef',
      access_token: '123456abcdef'
    };

    let createdApp = await this.getAppService().createApp(app);

    assert.equal(app['code'], createdApp['code']);
  }

  getAppService() {
    return this.createService('App.AppService');
  }
}

new AppServiceTest();