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
  browserSync.watch('src/styles/*/**').on('change', browserSync.reload);
  browserSync.watch('src/js/*/**').on('change', browserSync.reload);
  done();
}); 

gulp.task('css', function(done) {
  gulp.src('src/styles/index/*').pipe(concat('style.css')).pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('dist/css/index'));
  gulp.src('src/styles/catalog/*').pipe(concat('style.css')).pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('dist/css/catalog'));
  done();
});

gulp.task('img', function() {
  return gulp.src('src/img/*').pipe(gulp.dest('dist/img'));
});

gulp.task('html', function(done) {
  gulp.src('src/index.html').pipe(htmlreplace({js: {src: 'js/index/script.js', tpl: '<script src="%s" defer></script>'}, css: 'css/index/style.css'})).pipe(htmlmin()).pipe(gulp.dest('dist'));
  gulp.src('src/catalog.html').pipe(htmlreplace({js: {src: 'js/catalog/script.js', tpl: '<script src="%s" defer></script>'}, css: 'css/catalog/style.css'})).pipe(htmlmin()).pipe(gulp.dest('dist'));
  done();
});

gulp.task('js', function(done) {
  gulp.src('src/js/index/*').pipe(concat('script.js')).pipe(jsmin()).pipe(gulp.dest('dist/js/index'));
  gulp.src('src/js/catalog/*').pipe(concat('script.js')).pipe(jsmin()).pipe(gulp.dest('dist/js/catalog'));
  done();
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

gulp.task('slider', function() {
  return gulp.src('src/bxSlider/*').pipe(gulp.dest('dist/bxSlider'));
})

gulp.task('jquery', function() {
  return gulp.src('src/jquery/jquery.js').pipe(gulp.dest('dist/jquery'));
})

exports.bundle = gulp.series('clean-dist', 'img', 'css', 'html', 'js', 'slider', 'jquery');
exports.imgMin = gulp.series('clean-img', 'minImg');
exports.default = gulp.series('browserSync');


