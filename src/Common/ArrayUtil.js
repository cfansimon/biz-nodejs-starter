'use strict';

export default class ArrayUtil {
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
}
