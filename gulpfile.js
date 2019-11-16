// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Builder
var builder = require('./builder.json');

// Eve tasks
gulp.task('build-eve', function () {
    return gulp.src(builder.eve.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync())
        .pipe(postcss())
        .pipe(rename({
            basename: builder.eve.out
        }))
        .pipe(gulp.dest(builder.eve.dest[0]))
        .pipe(gulp.dest(builder.eve.dest[1]));
});

gulp.task('build-eve-min', function () {
    return gulp.src(builder.eve.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(postcss())
        .pipe(rename({
            basename: builder.eve.out,
            suffix: '.min'
        }))
        .pipe(gulp.dest(builder.eve.dest[0]))
        .pipe(gulp.dest(builder.eve.dest[1]));
});

gulp.task('build', ['build-eve', 'build-eve-min']);

// Docs tasks
gulp.task('build-docs-js', function () {
    return gulp.src(builder.docs.js.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(uglify())
        .pipe(concat(builder.docs.js.out + '.min.js'))
        .pipe(gulp.dest(builder.docs.js.dest))
});

gulp.task('build-docs-css', function () {
    return gulp.src(builder.docs.css.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(postcss())
        .pipe(rename({
            basename: builder.docs.css.out,
            suffix: '.min'
        }))
        .pipe(gulp.dest(builder.docs.css.dest));
});

gulp.task('build-docs', ['build-docs-js', 'build-docs-css']);

// Site tasks
gulp.task('build-site-js', function () {
    return gulp.src(builder.site.js.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(uglify())
        .pipe(concat(builder.site.js.out + '.min.js'))
        .pipe(gulp.dest(builder.site.js.dest))
});

gulp.task('build-site-css', function () {
    return gulp.src(builder.site.css.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(postcss())
        .pipe(rename({
            basename: builder.site.css.out,
            suffix: '.min'
        }))
        .pipe(gulp.dest(builder.site.css.dest));
});

gulp.task('build-site', ['build-site-js', 'build-site-css']);

// Watchers
gulp.task('watch', ['build', 'build-docs', 'build-site'], function () {
    // Eve watcher
    gulp.watch(builder.eve.src, ['build']);

    // Docs watchers
    gulp.watch(builder.docs.js.src, ['build-docs-js']);
    gulp.watch(builder.docs.css.src, ['build-docs-css']);

    // Site watchers
    gulp.watch(builder.site.js.src, ['build-site-js']);
    gulp.watch(builder.site.css.src, ['build-site-css']);
});

// Build all
gulp.task('build-all', ['build', 'build-docs', 'build-site']);
