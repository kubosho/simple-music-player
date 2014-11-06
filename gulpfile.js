var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');

gulp.task('typescript', function() {
    gulp.src('src/scripts/**/*.ts')
        .pipe(ts({
            declarationFiles: true,
            target: 'es5'
        })
        .pipe(tslint())
        .pipe(tslint.report('verbose')));
});

gulp.task('default', function () {
});
