const gulp = require('gulp'),
      del = require('del');


gulp.task(clean);


function clean() {
  return del('./app/dist');
}
