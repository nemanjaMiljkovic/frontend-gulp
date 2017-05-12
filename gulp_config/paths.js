
module.exports = {
  html: {
    src: './app/index.html',
    prodDest: './app/dist/'
  },
  css: {
    src: './app/assets/css/styles.scss',
    watch: './app/assets/css/**/*.scss',
    modules: './app/assets/css/modules/',
    dest: './app/temp/css/',
    prodDest: './app/dist/css/',
  },
  js: {
    src: './app/assets/js/index.js',
    watch: './app/assets/js/**/*.js',
    dest: './app/temp/js/'
  },
  img: {
    src: './app/assets/img/*',
    srcSprite: './app/assets/img/icons/**/*.svg',
    destSprite: './app/temp/sprite/',
    prodDest: './app/dist/img/',
  }
}
