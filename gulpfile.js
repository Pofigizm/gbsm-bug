var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp
    .src('source/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript({ noExternalResolve: true, target: 'ES6' }))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write('.', { sourceRoot: '/' }))
    .pipe(gulp.dest('build'))
  ;
});

