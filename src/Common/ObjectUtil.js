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

  static index(array, name) {
    let indexedMap = {};

    if (array.length == 0) {
      return indexedMap;
    }

    for (let item of array) {
      if (item.hasOwnProperty(name)) {
        indexedMap[item[name]] = item;
      }
    }

    return indexedMap;
  }

  static column(array, columnName) {

    let column = [];

    if (array.length == 0) {
      return column;
    }

    for (let item of array) {
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
