'use strict';

import csv from 'fast-csv';
import fs from 'fs';

export default class CsvUtil {

  static parse(filepath) {

    if (!fs.existsSync(filepath)) {
      return false;
    }

    return new Promise((resolve, reject) => {
      let rows = [];
      csv.fromPath(filepath, {headers: true}).on("data", (row) => {
        rows.push(row);
      }).on("end", () => {
        resolve(rows);
      });

    });
  }
}
