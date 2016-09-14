'use strict';
const estorePreprocessor = require('estore-preprocessor');
const gulp = require('gulp');
const gulpChanged = require('gulp-changed');
const gulpPlumber = require('gulp-plumber');
const gulpPostcss = require('gulp-postcss');

gulp.task('styles', () => {
	return gulp.src('source/css/index.css')
		.pipe(gulpPlumber())
		.pipe(gulpPostcss([estorePreprocessor({path: 'css'})]))
		.pipe(gulp.dest('build'));
});

gulp.task('copy', () => {
	return gulp.src(['source/**/*.{default,eot,gif,html,jpg,jsp,png,svg,ttf,woff,xml}'])
		.pipe(gulpChanged('build'))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', ['default'], () => {
	gulp.watch(['source/css/**/*.css'], ['styles']);
	gulp.watch(['source/**/*.{default,eot,gif,html,jpg,jsp,png,svg,ttf,woff,xml}'], ['copy']);
});

gulp.task('default', ['copy', 'styles']);
