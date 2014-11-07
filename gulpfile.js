var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var jade = require('gulp-jade');

gulp.task('jade', function() {
    gulp.src('./src/views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('typescript', function() {
    gulp.src('src/scripts/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
        .pipe(ts({
            declarationFiles: true,
            target: 'es5'
        })
        .pipe(gulp.dest('./dist/scripts/')));
});

gulp.task('default', function () {
});
