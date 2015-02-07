var gulp = require('./gulp')([
  'build',
  'js',
  'lint'
]);
//adding comment to test submodules
gulp.task('watch', function (){
  gulp.watch('src/*', ['build']);
});

gulp.task('default', ['build']);
