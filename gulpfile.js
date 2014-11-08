'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var karma = require('karma').server;

// Compile jade
gulp.task('jade', function () {
    return gulp.src('./src/views/*.jade')
        .pipe($.jade())
        .pipe(gulp.dest('./dist/'));
});

// Compile and Lint TypeScript
gulp.task('typescript', function () {
    return gulp.src('./src/scripts/**/*.ts')
        .pipe($.tslint())
        .pipe($.tslint.report('verbose'))
        .pipe($.typescript({
            declarationFiles: true,
            target: 'es5'
        })
        .pipe(gulp.dest('./dist/scripts/')));
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

// Copy all files in "src" directory
gulp.task('copy', function () {
    gulp.src([
        'src/**/*',
        '!src/**/*.html',
        '!src/**/*.css',
    ])
    .pipe(gulp.dest('dist/'));
});

// Copy all files in "bower_components" directory
gulp.task('components', function () {
    gulp.src([
        'bower_components/**/*'
    ])
    .pipe(gulp.dest('dist/bower_components/'));
});

gulp.task('default', function () {
});
