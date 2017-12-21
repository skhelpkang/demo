
const buildDev = require('./webpack.dev.builder.js');


const commonOptions = {
  entry: {
    'vendor': './app/vendor.js',
    'app': './app/index.js',
  },
  additionalExternals: {},
};

const devOptions = {
  "proxy": {
    "/working-sample/*": {
      "target": "http://10.250.55.157:8399/"
    }
  },
};

module.exports = buildDev(commonOptions, devOptions);
