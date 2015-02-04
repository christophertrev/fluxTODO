var gulp = require('gulp');
var react = require('gulp-react');
var gutil = require('gulp-util')
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
 
gulp.task('build', function () {
  return gulp.src('src/*')
    .pipe(react())
    .pipe(gulp.dest('lib'));
});
console.log(watchify.args)
var bundler = watchify(browserify('./src/index.js', watchify.args));
// add any other browserify options or transforms here
bundler.transform(reactify);

gulp.task('js', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./lib'));
}

gulp.task('watch', function (){
  gulp.watch('src/*', ['build']);
})

gulp.task('default', ['build']);