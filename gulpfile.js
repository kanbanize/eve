// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Configurations
var config = {
    eve: {
        src: ['src/**/*.scss'],
        dest: 'dist',
        out: 'eve'
    },
    docs: {
        js: {
            src: ['docs/js/**/*.js'],
            dest: 'docs/dist',
            out: 'docs'
        },
        css: {
            src: ['docs/sass/**/*.scss'],
            dest: 'docs/dist',
            out: 'docs'
        }
    }
};

// Eve tasks
gulp.task('build-eve', function() {
    return gulp.src(config.eve.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync())
        .pipe(rename({
            basename: config.eve.out
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(config.eve.dest));
});

gulp.task('build-eve-min', function() {
    return gulp.src(config.eve.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            basename: config.eve.out,
            suffix: '.min'
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(config.eve.dest));
});

gulp.task('build', ['build-eve', 'build-eve-min']);

// Docs tasks
gulp.task('build-docs-js', function() {
    return gulp.src(config.docs.js.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(uglify())
        .pipe(concat(config.docs.js.out + '.min.js'))
        .pipe(gulp.dest(config.docs.js.dest))
});

gulp.task('build-docs-css', function() {
    return gulp.src(config.docs.css.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            basename: config.docs.css.out,
            suffix: '.min'
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(config.docs.css.dest));
});

gulp.task('build-docs', ['build-docs-js', 'build-docs-css']);

// Watchers
gulp.task('watch', ['build', 'build-docs'], function() {
    // Eve watcher
    gulp.watch(config.eve.src, ['build']);

    // Docs watchers
    gulp.watch(config.docs.js.src, ['build-docs-js']);
    gulp.watch(config.docs.css.src, ['build-docs-css']);
});

// All
gulp.task('build-all', ['build', 'build-docs']);
