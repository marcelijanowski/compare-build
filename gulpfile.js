var babel,
    eslint,
    gulp,
    jade;

babel = require('gulp-babel');
eslint = require('eslint');
gulp = require('gulp');
jade = require('gulp-jade');

gulp.task('eslint', function () {
  return gulp.src([
            'assets/js'
          ])
          .pipe(eslint());
});

gulp.task('watch', function () {
  gulp.watch([
    'index.jade',
    'assets/**/*.jade'
  ])
});