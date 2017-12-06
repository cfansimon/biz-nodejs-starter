'use strict';

import ApiClientFactory from 'Component/ApiClient/ApiClientFactory';
import AppV1ConverterFactory from 'Component/AppV1Converter/ConverterFactory';

export default class DefaultServiceProvider {

  register(biz) {
    biz.set('api_client_factory', (biz) => {
      let instance = new ApiClientFactory();
      instance.setBiz(biz);
      return instance;
    });

    biz.set('app_v1_converter_factory', (biz) => {
      let instance = new AppV1ConverterFactory();
      instance.setBiz(biz);
      return instance;
    });
  }
}
