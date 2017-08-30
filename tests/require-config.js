/**
 * This file plays the same role as webpack.config,
 * providing special loader mappings for different
 * file extensions, but while running inside NodeJS
 */
const path = require('path');

require('babel-core/register')({
  only: /tests/,
  sourceMaps: true,
  ignore: false
});

function noop() {
}

function image(module) {
  module.exports = path.join(
    path.relative(path.join(__dirname, '..', 'src'), module.id)
  );
}

require.extensions['.css'] = noop;
require.extensions['.less'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.sass'] = noop;
require.extensions['.svg'] = image;
require.extensions['.png'] = image;
require.extensions['.gif'] = image;
require.extensions['.jpg'] = image;
