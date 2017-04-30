const gulp = require('gulp'),
      fs = require('fs'),
      sass = require('gulp-sass'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      postcss = require('gulp-postcss'),
      Parker = require('parker/lib/Parker'),
      scssParser = require('postcss-scss'),
      plumber = require('gulp-plumber'),
      { css } = require('../paths');

gulp.task('css:dev', cssDev);
gulp.task('css:prod', cssProd);
gulp.task('css:analyze', analyzeCSS);

function cssDev() {
  return gulp.src(css.src)
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(css.dest));
}

function cssProd() {
  return gulp.src(css.src)
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer, cssnano]))
        .pipe(gulp.dest(css.prodDest));
}

function analyzeCSS(done) {
  fs.readFile('./app/dist/css/styles.css', (err, data) => {
    const parker = new Parker(require('parker/metrics/All'));
    const results = parker.run(data.toString());
    console.log(JSON.stringify(results, null, 2));
    done();
  })
}
