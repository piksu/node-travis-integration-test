var gulp = require('gulp');

gulp.task('testi', function () {
  console.log("Gulp testi.");
});

gulp.task('default', function () {
  gulp.run('testi');
});
