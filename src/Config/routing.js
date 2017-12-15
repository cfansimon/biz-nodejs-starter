"use strict";

import Index from 'Resource/Index';
import AccessToken from 'Resource/AccessToken';

export default [
  [Index, {'get': '/'}],
  [AccessToken, {'get': '/access_token'}],
];