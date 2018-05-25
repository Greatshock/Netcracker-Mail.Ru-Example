'use strict';

const gulp         = require('gulp'),
      del          = require('del'),
      autoprefixer = require('gulp-autoprefixer'),
      less         = require('gulp-less'),
      cleanCSS     = require('gulp-clean-css'),
      gulpIf       = require('gulp-if'),
      sourceMaps   = require('gulp-sourcemaps'),
      browserSync  = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('less', () => {
    return gulp.src('src/assets/themes/base/base.less')
        .pipe(gulpIf(isDevelopment, sourceMaps.init()))
        .pipe(less())
        .on('error', onLessError)
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'safari 5',
                'ie 10',
                'ie 11'
            ],
            cascade: true
        }))
        .pipe(cleanCSS())
        .pipe(gulpIf(isDevelopment, sourceMaps.write()))
        .pipe(gulp.dest('prod'));
});

gulp.task('images', () => {
    return gulp.src('src/assets/themes/base/images/**/*.*', {base: 'src/assets/themes/base', since: gulp.lastRun('images')})
        .pipe(gulp.dest('prod'));
});

gulp.task('index', () => {
    return gulp.src('src/index.html', {since: gulp.lastRun('index')})
        .pipe(gulp.dest('prod'));
});

gulp.task('clean', () => {
    return del('prod');
});

gulp.task('build', gulp.series('clean', gulp.parallel('less', 'images', 'index')));

gulp.task('watch', () => {
    gulp.watch('src/assets/themes/base/base.less', gulp.series('less'));
    gulp.watch('src/assets/themes/base/images/**/*.*', gulp.series('images'));
    gulp.watch('src/index.html', gulp.series('index'));
});

gulp.task('serve', function() {

    browserSync.init({
        server: 'prod'
    });

    browserSync.watch('prod/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));

/***HELPERS FUNCTIONS***/
function onLessError(error) {
    console.error(error.message);
    this.emit('end');
}
