var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function(done) {
  browserSync({
    // open: false,
    port: 9000,
    server: {
      baseDir: ['client']
    }
  });

  gulp.watch(['client/**/*'],reload);
});

gulp.task('default', ['serve']);
