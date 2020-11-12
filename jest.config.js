module.exports = {
  setupFiles: ['<rootDir>/enzyme.config.js'],

  testMatch: ['**/tests/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },

};
