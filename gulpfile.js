const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/public/css')); // Update destination path to './public/css'
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/public/images')); // Update destination path to './public/images'
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}
