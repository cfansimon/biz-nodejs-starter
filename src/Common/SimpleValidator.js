'use strict';

export default class SimpleValidator {

  static chineseAndAlphanumeric(value) {
    return !!(/[a-zA-Z0-9\u4e00-\u9fa5]+/.test(value))
  }

  static numeric(value) {
    return !!(/[0-9]+/.test(value))
  }

  static alphanumeric(value) {
    return !!(/[a-zA-Z0-9]+/.test(value))
  }
}
  