var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task ('mytask', function (done) {
  console.log('Hello world!');
  done();
});

//static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});