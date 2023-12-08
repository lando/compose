'use strict';

// Modules
const _ = require('lodash');

// Builder
module.exports = {
  name: 'compose',
  config: {
    version: 'custom',
    services: {},
    networks: {},
    volumes: {},
  },
  parent: '_lando',
  builder: (parent, config) => class LandoCompose extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);
      super(id, options, {
        services: _.set(
          {},
          options.name,
          require('../utils/normalize-overrides')(options.services, options._app.root, options.volumes),
        ),
        networks: options.networks,
        volumes: options.volumes,
      });
    };
  },
};
