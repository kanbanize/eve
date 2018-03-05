// Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const gulpif = require('gulp-if');

// Configurations
const buildFiles = ['src/**/*.scss'];
const buildDestination = 'dist';
const buildFileName = 'eve';

// Tasks
gulp.task('build-eve', (callback) => {
    return gulp.src(buildFiles)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync())
        .pipe(rename({
            basename: buildFileName
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(buildDestination));
});

gulp.task('build-eve-min', (callback) => {
    return gulp.src(buildFiles)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
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

gulp.task('watch', () => {
    gulp.watch(buildFiles, ['build']);
});
