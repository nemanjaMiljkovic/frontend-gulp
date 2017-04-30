const gulp = require('gulp'),
{ img } = require('../paths'),
imgmin = require('gulp-imagemin');


gulp.task(optimizeImg);

function optimizeImg() {
  return gulp.src(img.src)
        .pipe(imgmin([
          imgmin.gifsicle({interlaced: true}),
          imgmin.jpegtran({progressive: true}),
          imgmin.optipng({optimizationLevel: 5}),
        ], { verbose: true }))
        .pipe(gulp.dest(img.prodDest));
}
