'use strict';

export default class BaseResource {

  constructor(biz) {
    this.biz = biz;
  }

  createService(name) {
    return this.biz.service(name);
  }

  extractSort(query) {

    let sort = {};

    if (!query['sort_key']) {
      return sort;
    }

    sort[query['sort_key']] = (query['sort_type'] && query['sort_type'] == 1) ? 1 : -1;

    return sort;
  }

  extractStartLimit(query) {

    let start = parseInt(query['start']) || 0;
    let limit = parseInt(query['limit']) || 20;

    return {start, limit}
  }

  extractConditions(conditions) {

    let filters = ['start', 'limit', 'sort_key', 'sort_type'];

    let extracted = {};

    for (let key in conditions) {
      if (filters.includes(key)) {
        continue;
      }

      if (key.endsWith('_lt')) {
        extracted[key.replace(/_lt$/i, '')] = {'$lt': conditions[key]};
      } else if (key.endsWith('_lte')) {
        extracted[key.replace(/_lte$/i, '')] = {'$lte': conditions[key]};
      } else if (key.endsWith('_gt')) {
        extracted[key.replace(/_gt$/i, '')] = {'$gt': conditions[key]};
      } else if (key.endsWith('_gte')) {
        extracted[key.replace(/_gte$/i, '')] = {'$gte': conditions[key]};
      } else if (key.endsWith('_in')) {
        extracted[key.replace(/_in$/i, '')] = {'$in': conditions[key].split(',')};
      } else if (key.endsWith('_like')) {
        let regx = new RegExp(`^${conditions[key]}`, 'i');
        extracted[key.replace(/_like$/i, '')] = regx;
      } else {
        extracted[key] = conditions[key];
      }

    }
    return extracted;
  }

  createResourceResponse(resource) {
    return {
      errcode: 0,
      errmsg: '',
      resource: resource,
    };
  }

  createResourcesResponse(resources, total) {
    return {
      errcode: 0,
      errmsg: '',
      resources: resources,
      total: total ? total : 0,
    };
  }
}
