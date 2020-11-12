module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    [
      require('@babel/plugin-proposal-decorators').default,

      {
        "legacy": true
      }
    ]
  ]
}