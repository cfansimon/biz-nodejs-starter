'use strict';

export default class ObjectUtil {

  static requires(obj, keys) {
    for (let i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(obj, keys[i])) {
        return false;
      }
    }

    return true;
  }

  static isEmpty(obj) {

    if (typeof obj != 'object') {
      return true;
    }

    for (let key in obj){
　　　　return false;
　　 }

　　 return true;
  }
}
