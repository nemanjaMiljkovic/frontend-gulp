const gulp = require('gulp'),
      usemin = require('gulp-usemin'),
      { html } = require('../paths'),
      rev = require('gulp-rev'),
      htmlMin = require('gulp-htmlmin');


gulp.task('html:prod', htmlBuild);


function htmlBuild() {
  return gulp.src(html.src)
        .pipe(usemin({
          css: [rev],
          html: [htmlMin({ collapseWhitespace: true })],
          js: [rev],
        }))
        .pipe(gulp.dest(html.prodDest));
}
