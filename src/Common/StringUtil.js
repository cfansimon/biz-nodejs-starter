'use strict';

export default class StringUtil {

  static createRandomString(length = 16) {
    let start = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < length; ++i) {
        code = code + start.charAt(Math.floor(Math.random()*61));
    }

    return code;
  }

}
