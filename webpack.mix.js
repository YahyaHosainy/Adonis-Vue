const mix = require('laravel-mix');

mix.setPublicPath('./public');

mix.js('./resources/js/main.js','assets/js/app.js').vue({
  version: 3,
  extractStyles: 'assets/css/app.css'
})
  .sass('./resources/sass/app.scss', 'assets/css/app.css')
