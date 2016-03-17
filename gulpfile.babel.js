var path = require('path');
var estorePreprocessor = require('estore-preprocessor');
var gulp = require('gulp');
var gulpPlumber = require('gulp-plumber');
var gulpPostcss = require('gulp-postcss');
var gulpSourcemaps = require('gulp-sourcemaps');

gulp.task('styles', () => {
	return gulp.src('css/index.css')
		.pipe(gulpPlumber())
		.pipe(gulpPostcss([estorePreprocessor({path: 'css/client'})]))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
	gulp.watch(['css/**/*.css'], ['styles']);
});

gulp.task('default', ['styles']);
