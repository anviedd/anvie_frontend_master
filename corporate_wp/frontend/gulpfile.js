const gulp = require('gulp');
const requireDir = require('require-dir');

const $ = require('./gulp/plugins');

requireDir('./gulp/tasks');

gulp.task('default', gulp.series(
  // 'cleanDest',
  gulp.parallel('sass', 'scripts', 'copyToDest'),
  gulp.parallel('serve', 'watch'),
));

gulp.task('build', gulp.series(
  // 'cleanDest',
  gulp.parallel('sass', 'copyToDest'),
  'cleanBuild',
  gulp.parallel('cleanCss', 'scripts', 'imagemin'),
  gulp.parallel('copyToBuild', 'copyPhpToBuild'),
  'sitemap',
));

gulp.task('buildCss', gulp.series(
  'sass',
  'cleanCss',
));
