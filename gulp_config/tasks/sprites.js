const gulp = require('gulp'),
      rename = require('gulp-rename'),
      del = require('del'),
      { img, css } = require('../paths'),
      svgSprite = require('gulp-svg-sprite');


gulp.task('sprites', gulp.series([cleanSprite, generateSprites, copySprite, copySpriteSvg, delSpriteTemp]));


function generateSprites() {
  return gulp.src(img.srcSprite)
         .pipe(svgSprite({
           mode: {
             css: {
               sprite: 'svg/sprite.svg',
               render: {
                 css: {
                  template: './gulp_config/templates/sprite.css',
                 }
               }
             }
           }
         }))
         .pipe(gulp.dest(img.destSprite));
}


function copySpriteSvg() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
          .pipe(gulp.dest('./app/assets/img/sprites/'));
}

function cleanSprite() {
  return del('./app/assets/img/sprites');
}

function delSpriteTemp() {
  return del('./app/temp/sprite');
}

function copySprite() {
  return gulp.src('./app/temp/sprite/css/*.css')
          .pipe(rename('_sprite.scss'))
          .pipe(gulp.dest(css.modules));
}
