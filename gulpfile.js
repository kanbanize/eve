// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');

// Configurations
var buildFiles = ['framework/**/*.scss'];
var buildDestination = 'build';
var buildFileName = 'eve';

// Tasks
gulp.task('build-eve', function() {
    return gulp.src(buildFiles)
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(rename({
            basename: buildFileName
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(buildDestination));
});

gulp.task('build-eve-min', function() {
    return gulp.src(buildFiles)
        .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            basename: buildFileName,
            suffix: '.min'
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(buildDestination));
});

gulp.task('build', ['build-eve', 'build-eve-min']);

gulp.task('watch', function() {
    gulp.watch(buildFiles, ['build']);
});
