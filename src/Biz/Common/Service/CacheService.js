'use strict';

import BaseService from 'Biz/BaseService';
import ObjectUtil from 'Common/ObjectUtil';
import moment from 'moment';

export default class CacheService extends BaseService {

  async get(name) {
    let caches = await this.gets([name]);

    if (caches[name]) {
      return caches[name];
    }

    return null;
  }

  async gets(names) {
    let caches = await this.getCacheDao().find({name: {$in: names}});

    let datas = {};
    for (let cache of caches) {
      if (cache['expired_time'] > 0 && cache['expired_time'] < moment().unix()) {
        continue;
      }

      datas[cache['name']] = cache['serialized'] ? JSON.parse(cache['data']) : cache['data'];
    }

    return datas;
  }

  async set(name, data, expiredTime = 0) {

    let cache = {
      name: name,
      data: data,
      expired_time: expiredTime,
      updated_time: moment().unix(),
    };

    return await this.getCacheDao().findOneAndUpdate({name: name}, cache, {new: true, upsert: true, setDefaultsOnInsert:true});
  }

  async clear(name = null) {

    if (name) {
      return await this.getCacheDao().remove({name: name});
    } else {
      return await this.getCacheDao().remove({});
    }
  }

  getCacheDao() {
    return this.createDao('Common.CacheDao');
  }

}