'use strict';
const estorePreprocessor = require('estore-preprocessor');
const gulp = require('gulp');
const gulpPlumber = require('gulp-plumber');
const gulpPostcss = require('gulp-postcss');

gulp.task('styles', () => {
	return gulp.src('css/index.css')
		.pipe(gulpPlumber())
		.pipe(gulpPostcss([estorePreprocessor({path: 'css'})]))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
	gulp.watch(['css/**/*.css'], ['styles']);
});

gulp.task('default', ['styles']);
