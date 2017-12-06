'use strict';

import BaseCommand from 'Command/BaseCommand';
import StringUtil from 'Common/StringUtil';
import prompt from 'prompt';

export default class GenerateApp extends BaseCommand {

  async run() {
    prompt.start();
    
    prompt.get(['name', 'code'], async (err, result) => {
    
      let app = {
        name: result.name,
        code: result.code,
        app_key: StringUtil.createRandomString(16),
        app_secret: StringUtil.createRandomString(32),
        access_token: StringUtil.createRandomString(32)
      };
    
      app = await this.getAppService().createApp(app);
    
      console.info(`App#${app.name}, app_key#${app.app_key}, app_secret#${app.app_secret} Created!`);

      process.exit();
    });
  }

  getAppService() {
    return this.createService('App.AppService');
  }
}
