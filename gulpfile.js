const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const minify = require('gulp-minify');

//Compile scss into css
function style(){
    //locate the scss file
    return gulp.src('./sass/**/*.scss')
    //pass the file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //Save the compile css
    .pipe(gulp.dest('./css'))
    //Stream changes to all browsers
    .pipe(browserSync.stream());
}

//Concat js files
function scripts(){
    return gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('js/compiled'));
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js', scripts).on('change', browserSync.reload);
}

exports.style = style;
exports.scripts = scripts;
exports.watch = watch;