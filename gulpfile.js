var gulp = require('gulp');
var php2html = require('gulp-php2html');
var htmlmin = require('gulp-htmlmin');
// gulp.src('./src/*.php').pipe(php2html()).pipe(gulp.dest('./build'));

gulp.task('bightml', function () {
   return gulp.src('./src/*.php').pipe(php2html()).pipe(gulp.dest('./src'));
});

gulp.task('html', function () {
   return gulp
      .src('./src/*.php')
      .pipe(php2html())
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./build'));
});