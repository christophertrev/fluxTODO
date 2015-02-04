var gulp = require('./gulp')([
  'build',
  'js'
]);

gulp.task('watch', function (){
  gulp.watch('src/*', ['build']);
});

gulp.task('default', ['build']);