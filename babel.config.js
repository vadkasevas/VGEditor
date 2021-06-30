module.exports = {
  presets: [
    [
      // '@vue/app',
      // {
      //   absoluteRuntime: false
      // }
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
        }
      }
    ],
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ["@babel/plugin-proposal-decorators",{"legacy": true}],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    ["@babel/plugin-proposal-optional-chaining"],
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@common': './src/common',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
