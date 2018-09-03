const gulp = require('gulp');
const ts = require('gulp-typescript');
const replace = require('gulp-replace');
const del = require('del');
const version = require('../package.json').version;

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