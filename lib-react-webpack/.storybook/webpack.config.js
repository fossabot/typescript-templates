const base = require('../webpack.config.js');

module.exports = async ({ config }) => {
    return {
        ...config,
        module: base.module,
        resolve: base.resolve
    };
}