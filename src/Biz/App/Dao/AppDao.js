'use strict';

import mongoose from 'mongoose';
import moment from 'moment';

let AppSchema = mongoose.Schema({
  name: { type: String, required: true},
  code: { type: String, required: true},
  app_key: { type: String, required: true },
  app_secret: {type: String, required: true },
  access_token: {type: String, required: true },
  access_token_expired_time: { type: Number, default: moment().unix() + 60 * 60 * 2 },
  status: {type: Number, default: 0},
  created_time: { type: Number, default: moment().unix() },
  updated_time: { type: Number, default: moment().unix() }
}, { versionKey: false });

AppSchema.index({code: 1}, {unique: true});
AppSchema.index({app_key: 1}, {unique: true});

export default AppSchema;
