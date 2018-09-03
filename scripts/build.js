const gulp = require('gulp');
// const path = require('path');
// const fs = require('fs');
// const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const replace = require('gulp-replace');
// const uglifyEs = require('uglify-es');
// const composer = require('gulp-uglify/composer');
const del = require('del');
const version = require('../package.json').version;
// const uglify = composer(uglifyEs);
// const rename = require('gulp-rename');

// const debug = require('gulp-debug');

gulp.task('build', ['build:typescript']);

gulp.task('build:prod', ['build:uglify']);

gulp.task('build:clean', function () {
  return del([
    'build/**/*'
  ]);
});


gulp.task('build:typescript', ['typescript:main']);

gulp.task('typescript:main', ['build:clean'], () => {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(tsProject())
    .pipe(replace('@{VERSION}', version))
    .pipe(gulp.dest('build/main'));
});