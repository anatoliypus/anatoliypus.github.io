let gulp = require('gulp');
let browserSync = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');
let cssmin = require('gulp-cssmin');
let htmlmin = require('gulp-htmlmin');
let concat = require('gulp-concat');
let jsmin = require('gulp-jsmin');
let htmlreplace = require('gulp-html-replace');
let clean = require('gulp-clean');

gulp.task('browserSync', function(done) {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
    open: false
  })
  browserSync.watch('src/*.html').on('change', browserSync.reload);
  browserSync.watch('src/styles/*').on('change', browserSync.reload);
  browserSync.watch('src/js').on('change', browserSync.reload);
  done();
}); 

gulp.task('css', function() {
  return gulp.src('src/styles/*').pipe(concat('style.css')).pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
  return gulp.src('src/img/*').pipe(gulp.dest('dist/img'));
});

gulp.task('html', function() {
  return gulp.src('src/*.html').pipe(htmlreplace({js: {src: 'js/script.js', tpl: '<script src="%s" defer></script>'}, css: 'css/style.css'})).pipe(htmlmin()).pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*').pipe(concat('script.js')).pipe(jsmin()).pipe(gulp.dest('dist/js'));
});

gulp.task('clean-dist', function() {
  return gulp.src('dist', {read: false, allowEmpty: true}).pipe(clean());
});

gulp.task('clean-img', function() {
  return gulp.src('dist/img', {read: false, allowEmpty: true}).pipe(clean());
});

gulp.task('minImg', function() {
  return gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

gulp.task('slick', function() {
  return gulp.src('src/slick/*').pipe(gulp.dest('dist/slick'));
})

gulp.task('jquery', function() {
  return gulp.src('src/jquery/jquery.js').pipe(gulp.dest('dist/jquery'));
})

exports.bundle = gulp.series('clean-dist', 'img', 'css', 'html', 'js', 'slick', 'jquery');
exports.imgMin = gulp.series('clean-img', 'minImg');
exports.default = gulp.series('browserSync');


