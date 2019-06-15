const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

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

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;