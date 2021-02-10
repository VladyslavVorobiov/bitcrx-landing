const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');
const concat = require('gulp-concat');

function concatJs(){
    return gulp.src('./scripts/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./scripts/')); 
}

function style(){
    return gulp.src('./scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
}

function lintCss(){
    return gulp.src('./scss/**/*.scss')
      .pipe(gulpStylelint({
        reporters: [
         {
              formatter: 'string', 
              console: true
         }
        ]
      }));

}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    //concatJs();
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./scripts/*.js').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.concatJs = concatJs;
exports.style = style;
exports.lintCss = lintCss;
exports.watch = watch;