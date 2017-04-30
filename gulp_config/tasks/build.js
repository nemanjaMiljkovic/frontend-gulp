const gulp = require('gulp');


gulp.task('build', gulp.series(['clean',
                   gulp.parallel(['css:prod', 'js:prod', 'optimizeImg'])]));
