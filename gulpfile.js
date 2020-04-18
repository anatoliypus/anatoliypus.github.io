let gulp = require('gulp');
let browserSync = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');
let cssmin = require('gulp-cssmin');
let htmlmin = require('gulp-htmlmin');
let concat = require('gulp-concat');
let jsmin = require('gulp-jsmin');

gulp.task('browserSync', function(done) {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
  browserSync.watch('src/*.html').on('change', browserSync.reload);
  browserSync.watch('src/styles/*').on('change', browserSync.reload);
  done();
}); 

gulp.task('css', function(done) {
  gulp.src('src/styles/*').pipe(concat('style.css')).pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('dist/css'));
  done();
});

gulp.task('img', function(done) {
  gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
  done();
});

gulp.task('html', function(done) {
  gulp.src('src/*.html').pipe(htmlmin()).pipe(gulp.dest('dist'));
  done();
});

gulp.task('js', function(done) {
  gulp.src('src/js/*').pipe(concat('script.js')).pipe(jsmin()).pipe(gulp.dest('dist/js'));
  done();
});

exports.bundle = gulp.series('css', 'img', 'html', 'js');


