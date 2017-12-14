'use strict';

import csv from 'fast-csv';
import fs from 'fs';

export default class CsvUtil {

  static parse(filepath, options = {}) {

    if (!fs.existsSync(filepath)) {
      throw new Error(`File#${filepath} not found`);
    }

    options = Object.assign({headers: true}, options);

    return new Promise((resolve, reject) => {
      let rows = [];
      csv.fromPath(filepath, options).on("data", (row) => {
        rows.push(row);
      }).on("end", () => {
        resolve(rows);
      });

    });
  }

  static write(filepath, data, options = {}) {

    options = Object.assign({headers: true}, options);

    return new Promise((resolve, reject) => {
      csv.writeToPath(filepath, data, options).on("finish", function(){
        resolve(true);
      });
    });
  }
}
