"use strict";

import Index from 'Resource/Index';
import AccessToken from 'Resource/AccessToken';

export default [
  ['GET', '/', Index.get],
  ['GET', '/access_token', AccessToken.get]
];
