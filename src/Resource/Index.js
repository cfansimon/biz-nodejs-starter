'use strict';

const Index = {

  get: async (ctx, next) => {
    ctx.body = { version: '1.0.0' };
  }
};

export default Index;
