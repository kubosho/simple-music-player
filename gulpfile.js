'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var karma = require('karma').server;
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Clean output directory
gulp.task('clean', del.bind(null, ['build', 'dist']));

// Build JavaScript, use browserify
gulp.task('browserify', function () {
    return browserify('./src/music-player.js')
        .bundle()
        .pipe(source('music-player.js'))
        .pipe(gulp.dest('./build/scripts/'));
});

// Test scripts
gulp.task('test', function (done) {
    gulp.src('./test/scripts/*.js')
        .pipe($.espower())
        .pipe(gulp.dest('./test/scripts/espower'));

    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

// Copy files
gulp.task('copy:files', function () {
    return gulp.src([
        './build/scripts/music-player.js'
    ])
    .pipe(gulp.dest('./dist/scripts/'));
});

// Copy dependency libraries
gulp.task('copy:libraries', function () {
    return gulp.src([
        './bower_components/vue/dist/vue.min.js'
    ])
    .pipe(gulp.dest('./example/scripts/lib/'));
});

// Generate complexity analysis reports
gulp.task('analyze', function () {
    return gulp.src('./dist/scripts/*.js')
        .pipe($.plato('./report', {
            jshint: {
                options: {
                    strict: true
                }
            },
            complexity: {
                trycatch: true
            }
        }));
});

// Compile jade
gulp.task('jade', function () {
    return gulp.src('./example/views/*.jade')
        .pipe($.jade())
        .pipe(gulp.dest('./example/views/'));
});

// Watch files for changes & reload
gulp.task('serve', function () {
    browserSync({
        notify: false,
        server: './dist'
    });

    gulp.watch(['./src/views/**/*.jade'], ['jade', reload]);
    gulp.watch(['./dist/scripts/**/*.js'], [reload]);
});

gulp.task('build:scripts', function () {
    return runSequence('browserify', ['test', 'copy:files'], 'analyze');
});

// Build production files, the default task
gulp.task('default', function () {
    return runSequence('clean', ['build:scripts', 'jade', 'copy:libraries']);
});
