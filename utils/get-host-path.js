'use strict';

// Modules
const _ = require('lodash');

/*
 * Helper method to get the host part of a volume
 */
module.exports = mount => _.dropRight(mount.split(':')).join(':');
