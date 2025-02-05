const gulp = require('gulp');

const $ = require('../plugins');
const mqpacker = require('css-mqpacker');
const postcss = require('gulp-postcss');
const conf = require('../conf').sass;

gulp.task('sass', () => {
  return gulp.src(conf.src)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      cascade: false
    }))
    .pipe(postcss([mqpacker()]))
    .pipe($.rename(path => {
      path.dirname = path.dirname.replace('css', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});
