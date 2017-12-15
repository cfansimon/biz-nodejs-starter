'use strict';

import ObjectUtil from 'Common/ObjectUtil';

export default class BaseService {
  
  constructor(biz) {
    this.biz = biz;
  }

  prepareBatchUpdate(rows, identifyKeys = []) {

    if (!identifyKeys || identifyKeys.length == 0) {
      identifyKeys = ['_id'];
    }

    let prepared = [];

    rows.forEach((row) => {
      if (ObjectUtil.requires(row, identifyKeys)) {
        prepared.push({
          updateOne: {
            filter: ObjectUtil.parts(row, identifyKeys),
            update: {'$set': row}
          }
        });
      } else {
        prepared.push({
          insertOne: {document: row}
        });
      }
    });

    return prepared;
  }

  createService(name) {
    return this.biz.service(name);
  }

  createDao(name) {
    return this.biz.dao(name);
  }

  getLogger() {
    return this.biz.logger;
  }
}
