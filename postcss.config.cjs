module.exports = {
  plugins: [
      require('postcss-easy-import'),
      require('cssnano')({
        preset: 'default',
      })
  ]
};