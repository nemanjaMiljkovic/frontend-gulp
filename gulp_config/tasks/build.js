const gulp = require('gulp');


gulp.task('build', gulp.series(['clean',
                   gulp.parallel(['html:prod', 'css:prod', 'js:prod', 'optimizeImg'])]));
