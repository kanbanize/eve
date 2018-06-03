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
        dest: ['dist', 'docs/dist'],
        out: 'eve'
    },
    docs: {
        js: {
            src: ['docs/documentation/scripts/**/*.js'],
            dest: 'docs/documentation/dist',
            out: 'eve-docs'
        },
        css: {
            src: ['docs/documentation/styles/**/*.scss'],
            dest: 'docs/documentation/dist',
            out: 'eve-docs'
        }
    },
    site: {
        js: {
            src: ['docs/website/scripts/**/*.js'],
            dest: 'docs/website/dist',
            out: 'eve-website'
        },
        css: {
            src: ['docs/website/styles/**/*.scss'],
            dest: 'docs/website/dist',
            out: 'eve-website'
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
        .pipe(gulp.dest(config.eve.dest[0]))
        .pipe(gulp.dest(config.eve.dest[1]));
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
        .pipe(gulp.dest(config.eve.dest[0]))
        .pipe(gulp.dest(config.eve.dest[1]));
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

// Site tasks
gulp.task('build-site-js', function() {
    return gulp.src(config.site.js.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(uglify())
        .pipe(concat(config.site.js.out + '.min.js'))
        .pipe(gulp.dest(config.site.js.dest))
});

gulp.task('build-site-css', function() {
    return gulp.src(config.site.css.src)
        .pipe(gulpif(!process.env.TRAVIS, plumber()))
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            basename: config.site.css.out,
            suffix: '.min'
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(config.site.css.dest));
});

gulp.task('build-site', ['build-site-js', 'build-site-css']);

// Watchers
gulp.task('watch', ['build', 'build-docs', 'build-site'], function() {
    // Eve watcher
    gulp.watch(config.eve.src, ['build']);

    // Docs watchers
    gulp.watch(config.docs.js.src, ['build-docs-js']);
    gulp.watch(config.docs.css.src, ['build-docs-css']);

    // Site watchers
    gulp.watch(config.site.js.src, ['build-site-js']);
    gulp.watch(config.site.css.src, ['build-site-css']);
});

// Build all
gulp.task('build-all', ['build', 'build-docs', 'build-site']);
