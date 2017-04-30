
module.exports = {
  html: {
    src: './app/index.html',
    prodDest: './app/dist/'
  },
  css: {
    src: './app/assets/css/styles.css',
    watch: './app/assets/css/**/*.css',
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
    srcSprite: './app/assets/img/ico/*',
    destSprite: './app/assets/img/sprites',
    prodDest: './app/dist/img/',
  }
}
