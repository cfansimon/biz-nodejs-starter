'use strict';

import BizAware from 'Biz/BizAware';

export default class AbstractConverter extends BizAware {

  /**
   * Implementation required
   */
  multiConvert(rows) {
    throw new Error('You must implement the method `multiConvert(rows)`');
  }

  /**
   * Implementation required
   */
  convert(row) {
    throw new Error('You must implement the method `convert(row)`');
  }

  createService(name) {
    return this.biz.service(name);
  }
}
