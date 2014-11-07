var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var jade = require('gulp-jade');
var plato = require('gulp-plato');
var espower = require('gulp-espower');
var karma = require('karma').server;

gulp.task('jade', function () {
    return gulp.src('./src/views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('typescript', function () {
    return gulp.src('./src/scripts/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
        .pipe(ts({
            declarationFiles: true,
            target: 'es5'
        })
        .pipe(gulp.dest('./dist/scripts/')));
});

gulp.task('plato', function () {
    return gulp.src('./dist/scripts/*.js')
        .pipe(plato('./report', {
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

gulp.task('test', function (done) {
    gulp.src('./test/scripts/*.js')
        .pipe(espower())
        .pipe(gulp.dest('./test/scripts/espower'));

    return karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('default', function () {
});
