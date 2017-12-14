"use strict";

import { argv } from 'yargs';
import bizConfig from 'Config/biz';
import Biz from 'Biz/Biz';
import glob from 'glob';
import colors from 'colors';
import DefaultServiceProvider from "Biz/DefaultServiceProvider";

let biz = new Biz(bizConfig);
biz.register(new DefaultServiceProvider());

let commandPath = bizConfig.app.root_path + '/src/Command/';
let commandFiles = glob.sync(commandPath + "*.js");

let classMap = {};

for (let file of commandFiles) {
  let className = file.replace(commandPath, '').replace(file.substring(file.lastIndexOf('.')), '');

  if (className == 'BaseCommand') {
    continue;
  }

  classMap[className] = require(file).default;
}

let execCommand = argv._[0];

if (typeof classMap[execCommand] == 'undefined') {
  console.warn('Available Commands:'.inverse);
  for (let key in classMap) {
    console.warn(' ' + key.green);
  }
  process.exit();
}

let command = new classMap[execCommand](biz);
(async () => {
  await command.run(argv._);
  process.exit();
})();
