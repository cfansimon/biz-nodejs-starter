'use strict';

/**
 * this is a sample file
 */
import AbstractConverter from './AbstractConverter';

export default class SomeConverter extends AbstractConverter {

  multiConvert(rows) {
    return rows.map((row) => {
      return this.convert(row);
    });
  }

  convert(row) {
    let converted = {};

    converted['code'] = row['full_code'];
    converted['name'] = row['full_name'];

    return converted;
  }
}
