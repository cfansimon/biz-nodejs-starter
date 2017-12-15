"use strict";

import parameters from "./parameters_test";
import path from "path";

let bizConfig = {
  app: Object.assign(parameters.app, {
    root_path: path.normalize(path.join(__dirname, "/../..")),
    log_path: path.normalize(path.join(__dirname, "/../../var/log"))
  }),
  mongodb: parameters.mongodb
};

export default bizConfig;
