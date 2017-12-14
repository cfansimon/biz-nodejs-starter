'use strict';

import mongoose from 'mongoose';
import moment from 'moment';
import StringUtil from 'Common/StringUtil';
import SimpleValidator from 'Common/SimpleValidator';

let CacheSchema = mongoose.Schema({
  name: { type: String, required: true},
  data: { type: String, required: true},
  serialized: { type: Number, default: 0},
  expired_time: { type: Number, default: 0 },
  created_time: { type: Number, default: moment().unix() },
  updated_time: { type: Number, default: moment().unix() }
}, { versionKey: false });

CacheSchema.index({name: 1}, {unique: true});

export default CacheSchema;
