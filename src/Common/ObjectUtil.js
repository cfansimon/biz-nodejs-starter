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

  static index(obj, name) {
    let indexedMap = {};

    if (this.isEmpty(obj)) {
      return indexedMap;
    }

    for (let item in obj) {
      if (item.hasOwnProperty(name)) {
        indexedMap[item[name]] = item;
      }
    }

    return indexedMap;
  }

  static column(obj, columnName) {

    let column = [];

    if (this.isEmpty(obj)) {
      return column;
    }

    for (let item in obj) {
      if (item.hasOwnProperty(columnName)) {
        column.push(item[columnName]);
      }
    }

    return column;
  }

  static requires(obj, keys) {
    for (let i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(obj, keys[i])) {
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
