const gulp = require('gulp'),
webpack = require('webpack'),
configDev = require('../../webpack.dev'),
configProd = require('../../webpack.prod');

gulp.task('js:dev', jsDev);
gulp.task('js:prod', jsProd);



function jsDev(done) {
  webpack(configDev, (err, stats) => {
    if(err) console.log(err.message);
    console.log(stats.toString());
    done();
  });
}

function jsProd(done) {
  webpack(configProd, (err, stats) => {
    if(err) console.log(err.message);
    console.log(stats.toString());
    done();
  });
}
