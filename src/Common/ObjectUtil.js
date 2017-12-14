'use strict';

export default class ObjectUtil {

  static isEmpty(obj) {

    if (typeof obj != 'object') {
      return true;
    }

    for (let key in obj){
　　　　return false;
　　 }

　　 return true;
  }

  static requires(obj, keys) {
    for (let i = 0; i < keys.length; i++) {
      if (typeof obj[keys[i]] == 'undefined') {
        return false;
      }
    }

    return true;
  }

  static parts(obj, keys) {
    let parts = {};

    for (let key of keys) {
      parts[key] = obj[key];
    }

    return parts;
  }
}
