// Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');

// Configurations
const buildFiles = [
    'eve.scss',
    'sass/**/*.scss'
];
const buildDestination = 'build';
const buildFileName = 'eve';

// Tasks
gulp.task('build-eve', () => {
    return gulp.src(buildFiles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(rename({
            basename: buildFileName
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(buildDestination));
});

gulp.task('build-eve-min', () => {
    return gulp.src(buildFiles)
        .pipe(plumber())
        .pipe(sass({
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
