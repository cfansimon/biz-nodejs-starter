'use strict';

export default class ResponseUtil {

  static createResourceResponse(resource) {
    return {
      errcode: 0,
      errmsg: '',
      resource: resource,
    };
  }

  static createResourcesResponse(resources, total) {
    return {
      errcode: 0,
      errmsg: '',
      resources: resources,
      total: total ? total : 0,
    };
  }
}
