const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      {css, js, html } = require('../paths');


gulp.task('watch', gulp.series(['css:dev', 'js:dev', watch]));



function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });


  gulp.watch(html.src).on('change', browserSync.reload);
  gulp.watch(css.watch).on('change', gulp.series(['css:dev', inject]));
  gulp.watch(js.watch).on('change', gulp.series(['js:dev', browserSync.reload]));

}


function inject() {
  return gulp.src(css.dest)
        .pipe(browserSync.stream());
}
