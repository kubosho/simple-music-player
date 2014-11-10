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

// Compile jade
gulp.task('jade', function () {
    return gulp.src('./src/views/*.jade')
        .pipe($.jade())
        .pipe(gulp.dest('./dist/'));
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

// Build JavaScript, use browserify
gulp.task('browserify', function () {
    return browserify('./src/scripts/music-player.js')
        .bundle()
        .pipe(source('music-player.js'))
        .pipe(gulp.dest('./dist/scripts/'));
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

// Copy dependency libraries
gulp.task('copy', function () {
    return gulp.src([
        './bower_components/vue/dist/vue.min.js'
    ])
    .pipe(gulp.dest('./dist/scripts/lib/'));
});

// Clean output directory
gulp.task('clean', del.bind(null, 'dist'));

// Watch files for changes & reload
gulp.task('serve', function () {
    browserSync({
        notify: false,
        server: './dist'
    });

    gulp.watch(['./src/views/**/*.jade'], ['jade', reload]);
    gulp.watch(['./dist/scripts/**/*.js'], ['analyze', 'test', reload]);
});

// Build production files, the default task
gulp.task('default', ['clean'], function () {
    runSequence('test', 'analyze', ['jade', 'copy:components']);
});
