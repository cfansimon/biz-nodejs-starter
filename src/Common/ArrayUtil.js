'use strict';

export default class ArrayUtil {

  static index(array, name) {
    let indexedMap = {};

    if (array.length == 0) {
      return indexedMap;
    }

    for (let item of array) {
      if (typeof item[name] !== 'undefined') {
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
      if (typeof item[columnName] !== 'undefined') {
        column.push(item[columnName]);
      }
    }

    return column;
  }
}
