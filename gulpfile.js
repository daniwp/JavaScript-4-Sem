var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

gulp.task('styles', function () {
    gulp.src('public/assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('public/dist/css'))
});

gulp.task('images', function () {
    gulp.src('public/assets/img/**/*')
        .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
        .pipe(gulp.dest('public/dist/img'))
});


gulp.task('default', function () {
    gulp.start(
        'styles',
        'images',
        'watch'
    );
});

gulp.task('watch', function () {

    gulp.watch('public/assets/scss/**/*.scss', ['styles']);
    gulp.watch('public/assets/img/**/*', ['images']);

});