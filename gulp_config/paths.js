
module.exports = {
  html: {
    src: './app/index.html',
  },
  css: {
    src: './app/assets/css/styles.css',
    watch: './app/assets/css/**/*.css',
    dest: './app/temp/css/',
    prodDest: './app/dist/css/',
  },
  js: {
    src: './app/assets/js/index.js',
    watch: './app/assets/js/**/*.js'
  },
  img: {
    src: './app/assets/img/*',
    prodDest: './app/dist/img/',
  }
}
