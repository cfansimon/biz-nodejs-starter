'use strict';

import ResponseUtil from 'Common/ResponseUtil';

const Index = {

  get: async (ctx, next) => {
    ctx.body = ResponseUtil.createResourceResponse({
      name: 'benzuo stock data center',
      version: '1.0.0'
    });
  }
};

export default Index;
