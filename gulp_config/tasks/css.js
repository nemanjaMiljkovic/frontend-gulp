const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      postcss = require('gulp-postcss'),
      postcssImport = require('postcss-import'),
      { css } = require('../paths');

gulp.task('css:dev', cssDev);
gulp.task('css:prod', cssProd);


function cssDev() {
  return gulp.src(css.src)
        .pipe(postcss([postcssImport]))
        .pipe(sass())
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(css.dest));
}

function cssProd() {
  return gulp.src(css.src)
        .pipe(postcss([postcssImport]))
        .pipe(sass())
        .pipe(postcss([autoprefixer, cssnano]))
        .pipe(gulp.dest(css.prodDest));
}
