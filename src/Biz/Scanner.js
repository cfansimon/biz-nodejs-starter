"use strict";

import glob from 'glob';

export default class Scanner {

  static scanServices(rootPath) {
    let bizPath = rootPath + '/src/Biz/';
    let serviceFiles = glob.sync(bizPath + "*/Service/*.js");

    let services = [];
    
    for (let file of serviceFiles) {
      let cfg = file.replace(bizPath, '').split('/Service/');
      services.push([`${cfg[0]}.${cfg[1]}`.replace('Service.js', ''), require(file).default]);
    }

    return services;
  }

  static scanDaos(rootPath) {
    let bizPath = rootPath + '/src/Biz/';
    let DaoFiles = glob.sync(bizPath + "*/Dao/*.js");

    let daos = [];
    
    for (let file of DaoFiles) {
      let cfg = file.replace(bizPath, '').split('/Dao/');
      
      daos.push([`${cfg[0]}.${cfg[1]}`.replace('Dao.js', ''), require(file).default]);
    }

    return daos;
  }

}
