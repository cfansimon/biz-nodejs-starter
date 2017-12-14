'use strict';

import BaseCommand from 'Command/BaseCommand';
import StringUtil from 'Common/StringUtil';

export default class GenerateApp extends BaseCommand {

  async run(argv) {

    let name = argv[1];
    let code = argv[2];

    let app = {
      name: name,
      code: code,
      app_key: StringUtil.createRandomString(16),
      app_secret: StringUtil.createRandomString(32),
      access_token: StringUtil.createRandomString(32)
    };

    app = await this.getAppService().createApp(app);

    console.info(`App#${app.name}, app_key#${app.app_key}, app_secret#${app.app_secret} Created!`);
  }

  getAppService() {
    return this.createService('App.AppService');
  }
}
