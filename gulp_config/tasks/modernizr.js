const gulp = require('gulp'),
      { css, js } = require('../paths'),
      modernizer = require('gulp-modernizr');


gulp.task('modernizer', modernizerBuild);


function modernizerBuild() {
  return gulp.src([css.watch, js.watch])
        .pipe(modernizer({
            options: [
            "setClasses"
          ]
        }))
        .pipe(gulp.dest(js.dest))
}
